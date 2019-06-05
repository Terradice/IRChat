module.exports = class User {
    constructor(data) {
        this.id = "";
        this.createdAt = data.timestamp || new Date();
        this.name = data.name;
        this.role = data.role || "00";
        this.password = data.password;
    }

    safe() {
        let safeObj = {
            name: this.name,
            role: this.role,
            createdAt: this.createdAt
        }
        return safeObj
    }
}