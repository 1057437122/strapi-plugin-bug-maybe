import type { Core } from "@strapi/strapi";
module.exports = () => ({
  register: ({ strapi }: { strapi: Core.Strapi }) => {
    // execute some register code
  },
  config: {},
  contentTypes: {},
  routes: {
    admin: {
      routes: [
        {
          method: "GET",
          path: "/buld-uploader",
          handler: "helloController.index",
          config: {},
        },
      ],
      type: "admin", // can also be 'admin' depending on the type of route
    },
  },
  controllers: {
    helloController: ({ strapi }: { strapi: Core.Strapi }) => ({
      index(ctx: any) {
        ctx.body = "hellowolrd";
      },
    }),
  },
});
