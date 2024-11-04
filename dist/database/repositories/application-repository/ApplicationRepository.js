"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationRepository = void 0;
const client_1 = require("@prisma/client");
class ApplicationRepository {
    constructor() {
        this.prismaClient = new client_1.PrismaClient();
        this.createApplication = (application) => __awaiter(this, void 0, void 0, function* () {
            try {
                let expiration = new Date();
                expiration.setTime(new Date().getTime() + (60 * 60 * 1000 * Number(process.env.EXPIRATION_TIME_HOURS)));
                const entity = {
                    id: 1,
                    isActive: true,
                    updatedAt: new Date(),
                    incidentId: null,
                    crmProcessId: null,
                    expirationAt: expiration,
                    deletedAt: null,
                    phoneNumberHash: null,
                    userId: 1,
                    user: application.user,
                    uuid: undefined
                };
                return entity;
            }
            finally {
                console.log("Stopping trace");
            }
        });
    }
}
exports.ApplicationRepository = ApplicationRepository;
