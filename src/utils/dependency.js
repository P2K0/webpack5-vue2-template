import "core-js/stable";
import "regenerator-runtime";

import Vue from "vue";

import $api from "@/api";
import catchError from "@/utils/catchError";

import "normalize.css";

Object.assign(Vue.prototype, { $api, catchError });
