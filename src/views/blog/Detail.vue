<template>
  <div class="mx-2">
    <div class="max-w-4xl m-auto border border-gray-300 rounded-lg my-3">
      <div v-if="!article" class="text-center my-6 text-lg text-gray-700">
        <span class="text-xl">Sorry :(</span>
        <br/>
        This article is not in the correct format.
        <div class="btn-dark m-auto text-base mt-6 w-56" @click="$router.push('/blog')">Go back
        </div>
      </div>

      <div v-else>
        <img :src="`${baseBlogURI}/${blogId}/thumbnail.jpg`" alt="Thumbnail" class="rounded-t-lg"/>

        <div class="flex justify-between h-6 mx-3 text-gray-700">
          <div>{{ article.description }}</div>
          <div class="space-x-2">
            <span>{{ article.author }}</span>
            <span class="text-gray-300">|</span>
            <span>{{ article.date }}</span>
          </div>
        </div>

        <div class="p-4">
          <span ref="article" class="markdown"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import axios from 'axios';
import hljs from 'highlight.js';
import Showdown from 'showdown';
import DOMPurify from 'dompurify';
import { Article } from '@/interfaces';

Showdown.extension('codehighlight', () => {
  function htmlunencode (text: string) {
    return (
      text
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
    );
  }

  return [
    {
      type: 'output',
      filter (text: string) {
        const left = '<pre><code\\b[^>]*>';
        const right = '</code></pre>';
        const flags = 'g';

        const replacement = (wholeMatch: string, match: string, l: string, r: string) => {
          const m = htmlunencode(match);
          return l + hljs.highlightAuto(m).value + r;
        };
        return Showdown.helper.replaceRecursiveRegExp(text, replacement, left, right, flags);
      },
    },
  ];
});

Showdown.extension('tailwind', () => [
  {
    type: 'output',
    filter (text: string) {
      let out = '';
      const regex = /<(h[0-6])(.*)>(.*)<\/(h[0-6])>/g;

      out = text;

      const replacers = {
        h1: 'div class="text-4xl font-bold mt-3"',
        h2: 'div class="text-3xl font-semibold mt-3"',
        h3: 'div class="text-2xl font-semibold mt-3 "',
        h4: 'div class="text-xl font-semibold mt-3"',
        h5: 'div class="text-lg font-semibold mt-3"',
        h6: 'div class="text-base text-gray-600 font-semibold mt-2"',
      };

      type Headings = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

      out = out.replaceAll(regex, (...r) => {
        const tag = replacers[r[1] as Headings];
        return `<${tag} ${r[2]}>${r[3]}</div>`;
      });

      return out;
    },
  },
]);

Showdown.setFlavor('github');

@Component
export default class Detail extends Vue {
  @Prop() private blogId: string | undefined;
  // private md = '';
  private baseBlogURI = '/articles';
  private converter = new Showdown.Converter({ extensions: ['codehighlight', 'tailwind'] });
  private article: Article | null = null;

  async mounted (): Promise<void> {
    this.converter.setFlavor('github');

    const res = await axios.get(`${this.baseBlogURI}/${this.blogId}/data.json`);
    const data = res.data as Article;

    if (!data.name || !data.date || !data.description || !data.author) {
      console.log('Article syntax wrong.');
      return;
    }
    this.article = data;

    const articleRes = await axios.get(`${this.baseBlogURI}/${this.blogId}/article.md`);
    this.convertToHtml(articleRes.data);
  }

  convertToHtml (md: string): void {
    (this.$refs.article as HTMLSpanElement).innerHTML = DOMPurify.sanitize(this.converter.makeHtml(md));
  }
}
</script>

<style>
.markdown code:not(pre code) {
  border-radius: 5px;
  padding: 2px 6px 2px 6px;
  background: #282c34;
  color: #aab1be;
  margin: 1px;
}

.markdown pre {
  overflow-x: auto;
  border-radius: 5px;
  padding: 8px 8px 8px 8px;
  background: #282c34;
  color: #aab1be;
  margin: 8px 0 14px;
}

.markdown ul {
  list-style: initial;
  margin: initial;
  padding: 0 0 0 40px;
}

.markdown li {
  display: list-item;
}

.markdown a {
  color: #4378ff;
  text-decoration: underline;
}

.markdown hr {
  margin: 6px 0 6px;
  border-width: 2px;
}

.markdown blockquote {
  border-left: 5px #dcdcdc solid;
  margin: 4px 0 4px;
  padding: 10px;
  border-radius: 5px;
}
</style>
