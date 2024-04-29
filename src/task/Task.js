class Task {
    constructor(name, description, beginDate, endDate, duration) {
        this._name = name;
        this._description = description;
        this._beginDate = beginDate;
        this._endDate = endDate;
        this._duration = duration;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get description() {
        return this._description;
    }

    set description(value) {
        this._description = value;
    }

    get beginDate() {
        return this._beginDate;
    }

    set beginDate(value) {
        this._beginDate = value;
    }

    get endDate() {
        return this._endDate;
    }

    set endDate(value) {
        this._endDate = value;
    }

    get duration() {
        return this._duration;
    }

    set duration(value) {
        this._duration = value;
    }
}
