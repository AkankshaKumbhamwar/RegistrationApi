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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const user_1 = __importDefault(require("./models/user"));
const address_1 = __importDefault(require("./models/address"));
const db_1 = __importDefault(require("./models/db"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
db_1.default.sync().then(() => console.log('Database synced!'));
app.post('/submit', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, address } = req === null || req === void 0 ? void 0 : req.body;
    console.log({ name, address });
    if (!name || !address) {
        return res.status(400).json({ error: 'Name and address are required' });
    }
    try {
        const user = yield user_1.default.create({ name });
        yield address_1.default.create({ address, userId: user.id });
        res.status(201).json({ message: 'User and address saved successfully!' });
    }
    catch (err) {
        res.status(500).json({ error: 'An error occurred' });
    }
}));
const PORT = 100;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
//# sourceMappingURL=index.js.map