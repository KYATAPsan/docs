import React from 'react';
import Layout from '@theme-original/Layout';
import Head from '@docusaurus/Head';

export default function LayoutWrapper(props) {
  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                var w=window;
                if(w.ChannelIO){
                  return w.console.error("ChannelIO script included twice.");
                }
                var ch=function(){ch.c(arguments);};
                ch.q=[];
                ch.c=function(args){ch.q.push(args);};
                w.ChannelIO=ch;
                function l(){
                  if(w.ChannelIOInitialized){
                    return;
                  }
                  w.ChannelIOInitialized=true;
                  var s=document.createElement("script");
                  s.type="text/javascript";
                  s.async=true;
                  s.src="https://cdn.channel.io/plugin/ch-plugin-web.js";
                  var x=document.getElementsByTagName("script")[0];
                  if(x.parentNode){
                    x.parentNode.insertBefore(s,x);
                  }
                }
                if(document.readyState==="complete"){
                  l();
                } else {
                  w.addEventListener("DOMContentLoaded", l);
                  w.addEventListener("load", l);
                }
              })();
              ChannelIO('boot', {
                "pluginKey": "40c0d46f-84ba-460b-9686-82ebbc71e8dc"
              });
            `
          }}
        />
      </Head>
      <Layout {...props} />
    </>
  );
}
