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
    context.automations.automation({
      name: "fordward",
      responseMode: "wait",
      app: app,
      onRun: async (params, res) => {
        await context.deviceAction(
          "romeo2",
          "in1",
          "on",
          undefined,
          null,
          null
        );
        await context.deviceAction(
          "romeo2",
          "in2",
          "on",
          undefined,
          null,
          null
        );
        await context.deviceAction(
          "romeo2",
          "in3",
          "on",
          undefined,
          null,
          null
        );
        await context.deviceAction(
          "romeo2",
          "in4",
          "on",
          undefined,
          null,
          null
        );
        await context.deviceAction(
          "romeo2",
          "m1speed",
          "set_pwm_percentage",
          0.5,
          null,
          null
        );
        await context.deviceAction(
          "romeo2",
          "m2speed",
          "set_pwm_percentage",
          0.5,
          null,
          null
        );
        await context.deviceAction(
          "romeo2",
          "m3speed",
          "set_pwm_percentage",
          0.5,
          null,
          null
        );
        await context.deviceAction(
          "romeo2",
          "m4speed",
          "set_pwm_percentage",
          0.5,
          null,
          null
        );
        await context.deviceAction(
          "romeo2",
          "m1dir",
          "on",
          undefined,
          null,
          null
        );
        await context.deviceAction(
          "romeo2",
          "m2dir",
          "off",
          undefined,
          null,
          null
        );
        await context.deviceAction(
          "romeo2",
          "m3dir",
          "on",
          undefined,
          null,
          null
        );
        await context.deviceAction(
          "romeo2",
          "m4dir",
          "off",
          undefined,
          null,
          null
        );
      },
    });
  }
);
