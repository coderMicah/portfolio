import Document ,{ Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document {
    render() {
        return (
           <Html lang='en'>
              <Head>
                 <meta name="description" content="Micah's Portoflio" />
              </Head>
               <body>
                   <div id='menu-overlay'/>
                   <Main/>
                   <NextScript/>
               </body>
           </Html>
        );
    }
}

export default MyDocument;
