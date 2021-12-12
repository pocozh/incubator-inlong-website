"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[2660],{17722:function(n){n.exports=JSON.parse('{"blogPosts":[{"id":"/2021/11/26/new-committer-join","metadata":{"permalink":"/zh-CN/news/2021/11/26/new-committer-join","source":"@site/i18n/zh-CN/docusaurus-plugin-content-blog-news/2021-11-26-new-committer-join.md","title":"Apache InLong \u8fce\u63a5\u65b0 Committer \u6210\u5458","description":"InLong(\u5e94\u9f99)\xa0:\xa0\u4e2d\u56fd\u795e\u8bdd\u6545\u4e8b\u91cc\u7684\u795e\u517d\uff0c\u5f15\u6d41\u5165\u6d77\uff0c\u501f\u55bb InLong \u7cfb\u7edf\u63d0\u4f9b\u6570\u636e\u63a5\u5165\u80fd\u529b\u3002","date":"2021-11-26T00:00:00.000Z","formattedDate":"2021\u5e7411\u670826\u65e5","tags":[],"readingTime":7.98,"truncated":false,"authors":[]},"content":"InLong(\u5e94\u9f99)\xa0:\xa0\u4e2d\u56fd\u795e\u8bdd\u6545\u4e8b\u91cc\u7684\u795e\u517d\uff0c\u5f15\u6d41\u5165\u6d77\uff0c\u501f\u55bb InLong \u7cfb\u7edf\u63d0\u4f9b\u6570\u636e\u63a5\u5165\u80fd\u529b\u3002\\n\\n### Apache InLong(incubating) \u7b80\u4ecb\\n\\n[Apache InLong\uff08\u5e94\u9f99\uff09](https://inlong.apache.org)\u662f\u817e\u8baf\u6350\u732e\u7ed9 Apache \u793e\u533a\u7684\u4e00\u7ad9\u5f0f\u7684\u6570\u636e\u63a5\u5165\u5e73\u53f0\uff0c\u63d0\u4f9b\u81ea\u52a8\u3001\u5b89\u5168\u3001\u53ef\u9760\u548c\u9ad8\u6027\u80fd\u7684\u6570\u636e\u4f20\u8f93\u80fd\u529b\uff0c\u65b9\u4fbf\u4e1a\u52a1\u6784\u5efa\u57fa\u4e8e\u6d41\u5f0f\u7684\u6570\u636e\u5206\u6790\u3001\u5efa\u6a21\u548c\u5e94\u7528\u3002\\n\\nInLong \u9879\u76ee\u539f\u540d TubeMQ \uff0c\u4e13\u6ce8\u4e8e\u9ad8\u6027\u80fd\u3001\u4f4e\u6210\u672c\u7684\u6d88\u606f\u961f\u5217\u670d\u52a1\u3002\u4e3a\u4e86\u8fdb\u4e00\u6b65\u91ca\u653e TubeMQ \u5468\u8fb9\u7684\u751f\u6001\u80fd\u529b\uff0c\u6211\u4eec\u5c06\u9879\u76ee\u5347\u7ea7\u4e3a InLong\uff0c\u4e13\u6ce8\u6253\u9020\u4e00\u7ad9\u5f0f\u6570\u636e\u6d41\u63a5\u5165\u670d\u52a1\u5e73\u53f0\u3002\\n\\nApache InLong \u4ee5\u817e\u8baf\u5185\u90e8\u4f7f\u7528\u7684 TDBank \u4e3a\u539f\u578b\uff0c\u4f9d\u6258\u4e07\u4ebf\u7ea7\u522b\u7684\u6570\u636e\u63a5\u5165\u548c\u5904\u7406\u80fd\u529b\uff0c\u6574\u5408\u4e86\u6570\u636e\u91c7\u96c6\u3001\u6c47\u805a\u3001\u5b58\u50a8\u3001\u5206\u62e3\u6570\u636e\u5904\u7406\u5168\u6d41\u7a0b\uff0c\u62e5\u6709\u7b80\u5355\u6613\u7528\u3001\u7075\u6d3b\u6269\u5c55\u3001\u7a33\u5b9a\u53ef\u9760\u7b49\u7279\u6027\u3002\\n<img src=\\"/img/inlong-structure-zh.png\\" align=\\"center\\" alt=\\"Apache InLong\\"/>\\n\\n\\nApache InLong \u670d\u52a1\u4e8e\u6570\u636e\u91c7\u96c6\u5230\u843d\u5730\u7684\u6574\u4e2a\u751f\u547d\u5468\u671f\uff0c\u6309\u6570\u636e\u7684\u4e0d\u540c\u9636\u6bb5\u63d0\u4f9b\u4e0d\u540c\u7684\u5904\u7406\u6a21\u5757\uff0c\u4e3b\u8981\u5305\u62ec\uff1a\\n\\n- **inlong-agent**\uff0c\u6570\u636e\u91c7\u96c6 Agent\uff0c\u652f\u6301\u4ece\u6307\u5b9a\u76ee\u5f55\u6216\u6587\u4ef6\u8bfb\u53d6\u5e38\u89c4\u65e5\u5fd7\u3001\u9010\u6761\u4e0a\u62a5\u3002\u540e\u7eed\u4e5f\u5c06\u6269\u5c55 DB \u91c7\u96c6\u3001HTTP \u4e0a\u62a5\u7b49\u80fd\u529b\u3002\\n- **inlong-dataproxy**\uff0c\u4e00\u4e2a\u57fa\u4e8e Flume-ng \u7684 Proxy \u7ec4\u4ef6\uff0c\u652f\u6301\u6570\u636e\u53d1\u9001\u963b\u585e\u548c\u843d\u76d8\u91cd\u53d1\uff0c\u62e5\u6709\u5c06\u63a5\u6536\u5230\u7684\u6570\u636e\u8f6c\u53d1\u5230\u4e0d\u540c MQ\uff08\u6d88\u606f\u961f\u5217\uff09\u7684\u80fd\u529b\u3002\\n- **inlong-tubemq**\uff0c\u817e\u8baf\u81ea\u7814\u7684\u6d88\u606f\u961f\u5217\u670d\u52a1\uff0c\u4e13\u6ce8\u4e8e\u5927\u6570\u636e\u573a\u666f\u4e0b\u6d77\u91cf\u6570\u636e\u7684\u9ad8\u6027\u80fd\u5b58\u50a8\u548c\u4f20\u8f93\uff0c\u5728\u6d77\u91cf\u5b9e\u8df5\u548c\u4f4e\u6210\u672c\u65b9\u9762\u6709\u7740\u826f\u597d\u7684\u6838\u5fc3\u4f18\u52bf\u3002\\n- **inlong-sort**\uff0c\u5bf9\u4ece\u4e0d\u540c\u7684 MQ \u6d88\u8d39\u5230\u7684\u6570\u636e\u8fdb\u884c ETL \u5904\u7406\uff0c\u7136\u540e\u6c47\u805a\u5e76\u5199\u5165 Hive\u3001ClickHouse\u3001Hbase\u3001Iceberg \u7b49\u5b58\u50a8\u7cfb\u7edf\u3002\\n- **inlong-manager**\uff0c\u63d0\u4f9b\u5b8c\u6574\u7684\u6570\u636e\u670d\u52a1\u7ba1\u63a7\u80fd\u529b\uff0c\u5305\u62ec\u5143\u6570\u636e\u3001\u4efb\u52a1\u6d41\u3001\u6743\u9650\uff0cOpenAPI\xa0\u7b49\u3002\\n- **inlong-website**\uff0c\u7528\u4e8e\u7ba1\u7406\u6570\u636e\u63a5\u5165\u7684\u524d\u7aef\u9875\u9762\uff0c\u7b80\u5316\u6574\u4e2a InLong \u7ba1\u63a7\u5e73\u53f0\u7684\u4f7f\u7528\u3002\\n\\n### Apache InLong \u793e\u533a\u8fce\u6765\u4e24\u4f4d\u65b0 Committer\\n\\n\u5728\u7f8e\u597d\u768411\u6708\u4efd\uff0c\u5468\u5eb7(@healchow)\u3001\u5362\u5b50\u6770(@TszKitLo40) \u4e24\u4f4d\u8d21\u732e\u8005\u6210\u529f\u5165\u9009 Apache InLong Committer\uff0c\u795d\u8d3a\u4ed6\u4eec\uff01\\n\u5468\u5eb7\u548c\u5362\u5b50\u6770\u5f88\u65e9\u5c31\u662f Apache InLong \u7684\u8d21\u732e\u8005\uff0c\u4ed6\u4eec\u6b63\u5728\u53c2\u4e0e InLong 0.12.0 \u7248\u672c\u7684\u7279\u6027\u5f00\u53d1\uff0c\u6b22\u8fce\u5927\u5bb6\u5728\u5373\u5c06\u53d1\u5e03\u7684 InLong 0.12.0 \u4e2d\u56f4\u89c2\u4ed6\u4eec\u7684\u8d21\u732e\u3002\\n\\n### \u65b0 Committer \u5bc4\u8bed\\n\\n#### \u5468\u5eb7(@healchow)\\n\\n\u611f\u8c22 InLong \u793e\u533a\u5bf9\u6211\u7684\u8ba4\u53ef\uff0c\u80fd\u6210\u4e3a InLong \u7684\u4e00\u540d Committer\uff0c\u6211\u5907\u611f\u8363\u5e78\uff0c\u6df1\u611f\u8d23\u4efb\u91cd\u5927\u3002\\n\u5728\u5f00\u6e90\u793e\u533a\uff0c\u6765\u81ea\u5929\u5357\u6d77\u5317\u4e16\u754c\u5404\u5730\u7684\u6280\u672f\u4eba\u53ef\u4ee5\u4e00\u8d77\u4ea4\u6d41\u78b0\u649e\uff0c\u5728\u5f00\u9614\u6280\u672f\u89c6\u91ce\u7684\u540c\u65f6\uff0c\u8fd8\u80fd\u63d0\u5347\u7f16\u7801\u548c\u534f\u4f5c\u80fd\u529b\uff0c\u8fd9\u5bf9\u5f00\u53d1\u8005\u4e2a\u4eba\u6765\u8bf4\u662f\u5f88\u597d\u7684\u953b\u70bc\u673a\u4f1a\u3002\\n\u5728\u4e3a InLong \u505a\u51fa\u8d21\u732e\u7684\u540c\u65f6\uff0c\u6211\u5bf9\xa0InLong \u7684\u67b6\u6784\u548c\u5e95\u5c42\u6280\u672f\u6709\u4e86\u66f4\u6df1\u7684\u7406\u89e3\uff0c\u5e0c\u671b\u80fd\u6301\u7eed\u53c2\u4e0e\u5230 InLong \u7684\u5f00\u6e90\u8fc7\u7a0b\u4e2d\uff0c\u521b\u9020\u66f4\u5f3a\u5927\u7684 InLong\u3002\\n\\n#### \u5362\u5b50\u6770(@TszKitLo40)\\n\\n\u5f88\u9ad8\u5174\u53ef\u4ee5\u6210\u4e3a Apache InLong \u9879\u76ee\u7684\u4e00\u540d Committer \uff0c\u975e\u5e38\u611f\u8c22 InLong \u793e\u533a\u5bf9\u6211\u7684\u7591\u95ee\u7ed9\u51fa\u7684\u5e2e\u52a9\uff0c\u540c\u65f6\u4e5f\u975e\u5e38\u611f\u8c22 InLong \u793e\u533a\u5bf9\u6211\u7684\u8d21\u732e\u7684\u8ba4\u53ef\u3002\\n\u5728\u53c2\u4e0e Apache InLong \u9879\u76ee\u7684\u5f00\u53d1\u4e2d\uff0c\u6211\u89c9\u5f97\u662f Apache InLong \u662f\u4e00\u4e2a\u6b63\u5728\u5feb\u901f\u6210\u957f\u7684\u9879\u76ee\uff0c\u671f\u5f85\u8d8a\u6765\u8d8a\u591a\u7684\u4eba\u53ef\u4ee5\u53c2\u4e0e\u5230\u793e\u533a\u7684\u5efa\u8bbe\u4e2d\uff01\\n\\n### \u65b0 Committer \u8d21\u732e\u4e8b\u8ff9\\n\\n#### \u5468\u5eb7(@healchow)\\n\\n\u8d21\u732e\u4e86 InLong-Manager \u7684\u5927\u90e8\u5206\u529f\u80fd\uff0c\u5305\u62ec\u6570\u636e\u63a5\u5165\u3001\u6570\u636e\u6e90\u3001\u6570\u636e\u5b58\u50a8\u7b49\u4fe1\u606f\u7684\u914d\u7f6e\uff0c\u521b\u5efa\u5173\u8054\u6a21\u5757\u7684\u8d44\u6e90\uff08\u5982 TubeMQ \u7684 Topic \u548c\u6d88\u8d39\u7ec4\uff0c\u63a8\u9001 Sort \u6a21\u5757\u9700\u8981\u7684\u914d\u7f6e\u2026\u2026\uff09\u7b49\u7b49\u3002\\nInLong-Manager \u662f InLong \u9879\u76ee\u7684\u7ba1\u7406\u8005\uff0c\u5b83\u4e32\u8054\u8d77\u4e86\u5176\u4ed6\u7684\u5e95\u5c42\u6a21\u5757\uff0c\u8fd8\u6709\u5f88\u591a Feature \u4e9f\u5f85\u5f00\u53d1\uff0c\u8feb\u5207\u5730\u6b22\u8fce\u70ed\u7231\u5f00\u6e90\u7684\u4f19\u4f34\u4eec\u6765\u4e00\u8d77\u534f\u4f5c\u5171\u5efa\uff01\\n\\n#### \u5362\u5b50\u6770(@TszKitLo40)\\n\\n\u8d21\u732e\u4e86 InLong-TubeMQ \u7684\u7eaf Go SDK\u3002Go \u8bed\u8a00\u5728\u56fd\u5185\u8d8a\u6765\u8d8a\u6d41\u884c\uff0c\u8d8a\u6765\u8d8a\u591a\u7684\u7528\u6237\u6709\u4f7f\u7528 Go SDK \u7684\u9700\u6c42\u3002\\nGo SDK \u5728 API \u4e0a\u4fdd\u6301\u4e86\u548c Java/C++ \u7248\u672c\u7684\u4e00\u81f4\u6027\uff0c\u5728\u4e1a\u52a1\u5c42\u5904\u7406\u903b\u8f91\u4e5f\u548c Java/C++ \u7248\u672c\u57fa\u672c\u4e00\u81f4\uff0c\u5176\u4ed6\u8bed\u8a00 SDK \u7684\u4f7f\u7528\u8005\u4e5f\u53ef\u4ee5\u5feb\u901f\u4e0a\u624b\u3002\\n\u76ee\u524d Go SDK \u53ea\u5b9e\u73b0\u4e86\u6d88\u8d39\u529f\u80fd\uff0c\u671f\u5f85\u66f4\u591a\u8d21\u732e\u8005\u80fd\u4e00\u8d77\u53c2\u4e0e\u751f\u4ea7\u529f\u80fd\u7684\u5f00\u53d1\u3002\\n\\n### \u7ed9\u672a\u6765 Committer \u7684\u5efa\u8bae\\n\\n#### \u5468\u5eb7(@healchow)\\n\\n\u52a0\u5165\u5f00\u6e90\uff0c\u5343\u4e07\u4e0d\u8981\u6709\u754f\u60e7\u5fc3\u7406\u3002\u4f60\u53ef\u4ee5\u5148\u67e5\u770b\u201c\u5982\u4f55\u53c2\u4e0e\u8d21\u732e(https://inlong.apache.org/zh-CN/development/how-to-contribute)\u201d\uff0c \u7136\u540e fork \u4ee3\u7801\u4ed3\u5e93\uff0c\u7f16\u8bd1\u3001\u8fd0\u884c\u67d0\u4e2a\u611f\u5174\u8da3\u7684\u529f\u80fd\u6a21\u5757\u2026\u2026\\n\u8fc7\u7a0b\u4e2d\u9047\u5230\u95ee\u9898\u4e86\uff1f\u606d\u559c\u4f60\uff0c\u8fd9\u6709\u53ef\u80fd\u662f\u4e2a bug\uff0c\u4e5f\u6709\u53ef\u80fd\u662f\u6587\u6863\u4e0d\u5b8c\u5584\uff0c\u4f60\u53ef\u4ee5\u52a0\u4ea4\u6d41\u7fa4\u63d0\u95ee\uff0c\u7136\u540e\u5230\u8fd9\u91cc\u63d0 Issue (https://github.com/apache/incubator-inlong/issues/new/choose)\u2026\u2026\\n\u5230\u8fd9\u91cc\uff0c\u4f60\u5df2\u7ecf\u662f InLong \u7684 Contributor \u4e86\u3002\u52a0\u6cb9\uff0c\u4e0b\u4e00\u6b65\u5c31\u662f Committer :-)\\n\\n#### \u5362\u5b50\u6770(@TszKitLo40)\\n\\nInLong \u9879\u76ee\u76ee\u524d\u8fd8\u5904\u4e8e\u5b75\u5316\u9636\u6bb5\uff0c\u8fd8\u6709\u5f88\u591a\u53ef\u4ee5\u5b8c\u5584\u7684\u5730\u65b9\uff0c\u6bd4\u5982 Go SDK \u7684\u751f\u4ea7\u529f\u80fd\u3002\u5f00\u6e90\u9879\u76ee\u521a\u5f00\u59cb\u4e0a\u624b\u53ef\u80fd\u6bd4\u8f83\u56f0\u96be\uff0c\u6211\u7684\u7ecf\u9a8c\u662f\u53ef\u4ee5\u5148\u4ece\u7b80\u5355\u7684 Issue \u5f00\u59cb\uff0c\u6162\u6162\u83b7\u53d6\u6210\u5c31\u611f\u3002\\n\u540c\u65f6\u5982\u679c\u6709\u95ee\u9898\u53ef\u4ee5\u53ca\u65f6\u548c\u793e\u533a\u7684\u5c0f\u4f19\u4f34\u6c9f\u901a\uff0c\u793e\u533a\u6c1b\u56f4\u662f\u5f88nice\u7684\uff0c\u5927\u5bb6\u90fd\u5f88\u613f\u610f\u5e2e\u52a9\u65b0\u7684\u4f19\u4f34\u3002\u5982\u679c\u89c9\u5f97\u8d21\u732e\u4ee3\u7801\u6bd4\u8f83\u96be\uff0c\u4e5f\u53ef\u4ee5\u5148\u4ece\u8d21\u732e\u6587\u6863\u5f00\u59cb\uff0c\u671f\u5f85\u66f4\u591a\u7684\u5c0f\u4f19\u4f34\u52a0\u5165 InLong \u793e\u533a\uff0c\u4e00\u8d77\u524d\u8fdb\u3002\\n\\n### Apache InLong(incubating) \u8d21\u732e\u8005\u62db\u52df\\n\\nApache InLong(incubating)\xa0\u5f53\u524d\u5171\u6709\xa063 \u540d\xa0contributor\uff0c\u4ecd\u5904\u5728\u9879\u76ee\u5b75\u5316\u7684\u521d\u671f\uff0c\u8fd8\u6709\u5f88\u591a\u5f85\u529e\u4e8b\u9879\uff0c\u5305\u62ec\uff1aFeature \u5f00\u53d1\u3001\u793e\u533a\u8fd0\u8425\uff0c\u6587\u6863\u7ffb\u8bd1\u7b49\uff0c\u671f\u5f85\u66f4\u591a\u5f00\u6e90\u7231\u597d\u8005\u52a0\u5165 InLong\uff0c\u4e00\u8d77\u5c06 InLong \u6253\u9020\u6210 Apache \u9876\u7ea7\u9879\u76ee\u3002\\n\\n\u4ee5\u4e0b\u4e3a InLong \u9879\u76ee\u7684\u65f6\u95f4\u7ebf\uff1a\\n\\n- 2021\u5e7411\u67085\u65e5\uff0c\u53d1\u5e03 0.11.0 \u7248\u672c\\n- 2021\u5e749\u67083\u65e5\uff0c\u53d1\u5e03 0.10.0 \u7248\u672c\\n- 2021\u5e747\u670812\u65e5\uff0c\u53d1\u8d77\u66f4\u540d\u540e\u7b2c\u4e00\u4e2a\u7248\u672c 0.9.0 \u6295\u7968\\n- 2021\u5e744\u670811\u65e5\uff0c\u5b8c\u6210\u793e\u533a\u6539\u540d\uff0c\u6539\u4e3a Apache InLong\\n- 2021\u5e742\u670811\u65e5\uff0c\u53d1\u8d77\u793e\u533a\u6539\u540d\u53d8\u66f4\u7533\u8bf7\\n- 2020\u5e7412\u670820\u65e5\uff0c\u8fdb\u884c\u9879\u76ee\u6539\u540d\u8ba8\u8bba\u548c\u6295\u7968\\n- 2020\u5e745\u670830\u65e5\uff0c\u6309\u7167 Apache \u793e\u533a\u89c4\u8303\u53d1\u5e03\u7b2c\u4e00\u4e2a\u793e\u533a\u7248\u672c\\n- 2019\u5e7411\u67083\u65e5\uff0c\u8fdb\u5165 Apache \u793e\u533a\u5b75\u5316\\n- 2019\u5e749\u670812\u65e5\uff0cTubeMQ \u5bf9\u5916\u5f00\u6e90\u5e76\u6350\u732e\u7ed9 Apache \u793e\u533a\\n\\nApache InLong \u9879\u76ee\u5b98\u65b9\u7f51\u7ad9\uff1ahttps://inlong.apache.org\\n\\nApache InLong GitHub  \u5730\u5740 \uff1ahttps://github.com/apache/incubator-inlong"}]}')}}]);