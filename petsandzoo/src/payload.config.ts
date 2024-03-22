import { mongooseAdapter } from "@payloadcms/db-mongodb"
import { buildConfig } from "payload/config"
import { webpackBundler } from "@payloadcms/bundler-webpack"
import { slateEditor } from "@payloadcms/richtext-slate"
export default buildConfig({
    serverURL : process.env.NEXT_PUBLIC_SERVER_URL || '' ,
    collections:[],
    routes : {
        admin:'/sell'
    },
    admin:{
        bundler: webpackBundler(),
        meta:{
            titleSuffix: "- DigitalHippo",
            favicon:"/favicon.ico"
        }
    },
    editor: slateEditor({}),
    db:mongooseAdapter({
        url: process.env.MONGO_URL!,
    }),
})