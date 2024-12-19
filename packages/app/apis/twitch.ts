/*

app is an express object, you can use app.get/app.post to create new endpoints
you can define newendpoints like:

app.get('/api/v1/testapi', (req, res) => {
    //you code goes here
    //reply with res.send(...)
})

the session argument is a session object, with the following shape:
{
    user: { admin: boolean, id: string, type: string },
    token: string,
    loggedIn: boolean
}

use the chat if in doubt
*/

import { getAuth } from "protonode";
import { API, Protofy, getLogger } from "protobase";
import { APIContext } from "protolib/bundles/apiContext";
import { Application } from "express";
import fs from "fs";
import path from "path";
const tmi = require("tmi.js");

const root = path.join(process.cwd(), "..", "..");
const logger = getLogger();

Protofy("type", "CustomAPI");

export default Protofy(
  "code",
  async (app: Application, context: typeof APIContext) => {
    //PUT YOUR API HERE
    //context.deviceAction function allows to communicate with devices via mqtt
    //context.deviceSub allows to receive notifications from devices via mqtt
    //app is a normal expressjs object
    //context.mqtt is a mqttclient connection

    // Twitch Chat Configuration
    const twitchClient = new tmi.Client({
      // identity: {
      //     username: process.env.TWITCH_USERNAME,
      //     password: process.env.TWITCH_OAUTH_TOKEN,
      // },
      channels: ["protofy_xyz"],
    });

    // Connect to Twitch
    twitchClient.connect();

    // Set up the RC car (adjust for your specific RC setup)

    // Listen for chat commands
    twitchClient.on("message", async (channel, tags, message, self) => {
      await context.logs.log({
        message: "new message received",
        data: message,
        level: "info",
      });
      if (message.includes("palante")) {
        await context.logs.log({
          message: "tirando palante",
          level: "info",
        });
        await context.fetch(
          "get",
          "/api/v1/automations/fordward",
          null,
          null,
          null,
          false,
          undefined
        );
      }
      if (message.includes("patras")) {
        await context.logs.log({
          message: "tirando patras",
          level: "info",
        });
        await context.fetch(
          "get",
          "/api/v1/automations/backward",
          null,
          null,
          null,
          false,
          undefined
        );
      }
      if (message.includes("acho")) {
        await context.logs.log({
          message: "tirando acho",
          level: "info",
        });
        await context.fetch(
          "get",
          "/api/v1/automations/stop",
          null,
          null,
          null,
          false,
          undefined
        );
      }
      if (message.includes("palla")) {
        await context.logs.log({
          message: "tirando palla",
          level: "info",
        });
        await context.fetch(
          "get",
          "/api/v1/automations/left",
          null,
          null,
          null,
          false,
          undefined
        );
      }
      if (message.includes("paca")) {
        await context.logs.log({
          message: "tirando paca",
          level: "info",
        });
        await context.fetch(
          "get",
          "/api/v1/automations/right",
          null,
          null,
          null,
          false,
          undefined
        );
      }
    });
  }
);
