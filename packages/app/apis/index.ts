import {Protofy} from 'protobase'
import carApi from "./car";
import backwardApi from "./backward";
import fordwardApi from "./fordward";
import stopApi from "./stop";
import rightApi from "./right";
import leftApi from "./left";
import twitchApi from "./twitch";

const autoApis = Protofy("apis", {
    car: carApi,
    backward: backwardApi,
    fordward: fordwardApi,
    stop: stopApi,
    right: rightApi,
    left: leftApi,
    twitch: twitchApi
})

export default (app, context) => {
    Object.keys(autoApis).forEach((k) => {
        autoApis[k](app, context)
    })
}