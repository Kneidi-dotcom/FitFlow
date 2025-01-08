"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var sequelize_1 = require("sequelize");
var bcrypt_1 = require("bcrypt");
// Initialize Express app
var app = (0, express_1.default)();
var port = 3000;
// Set up body-parser middleware
app.use(body_parser_1.default.json());
// Set up Sequelize (replace with your own database configuration)
var sequelize = new sequelize_1.Sequelize('FitFlow', 'username', 'password', {
    host: 'localhost',
    dialect: 'mssql',
    logging: false,
});
// Define User model
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return User;
}(sequelize_1.Model));
User.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    birthdate: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    passwordHash: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    experience: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    size: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    bodyweight: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize: sequelize,
    modelName: 'User',
});
// Sync the User model with the database
sequelize.sync().then(function () {
    console.log('Database & tables created!');
});
// Register route
app.post('/api/register', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, username, birthdate, email, password, experience, size, bodyweight, existingUser, passwordHash, newUser, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, username = _a.username, birthdate = _a.birthdate, email = _a.email, password = _a.password, experience = _a.experience, size = _a.size, bodyweight = _a.bodyweight;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 5, , 6]);
                return [4 /*yield*/, User.findOne({ where: { email: email } })];
            case 2:
                existingUser = _b.sent();
                if (existingUser) {
                    return [2 /*return*/, res.status(400).json({ error: 'Email already exists' })];
                }
                return [4 /*yield*/, bcrypt_1.default.hash(password, 10)];
            case 3:
                passwordHash = _b.sent();
                return [4 /*yield*/, User.create({
                        username: username,
                        birthdate: birthdate,
                        email: email,
                        passwordHash: passwordHash,
                        experience: experience,
                        size: size,
                        bodyweight: bodyweight,
                    })];
            case 4:
                newUser = _b.sent();
                res.status(201).json({ message: 'User registered successfully', userId: newUser.get('id') });
                return [3 /*break*/, 6];
            case 5:
                error_1 = _b.sent();
                console.error('Error registering user:', error_1);
                res.status(500).json({ error: 'An error occurred while registering the user' });
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); });
// Start the server
app.listen(port, function () {
    console.log("Server running at http://localhost:".concat(port));
});
