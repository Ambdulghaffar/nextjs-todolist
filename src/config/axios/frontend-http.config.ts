"use client";

import environment from "../environment.config";
import { baseRequestConfig } from "./base-request.config";
import axios from "axios";

const { apiProxyBase } = environment;

export function frontendHttp() {
    const instance = axios.create({
        ...baseRequestConfig,
        baseURL: apiProxyBase,
    });
    return instance;
}