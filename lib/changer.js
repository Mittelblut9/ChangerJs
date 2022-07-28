const Information = {
    name: 'ChangerJS',
    Author: 'www.blackdayz.de',
    Version: '0.0.3',
    License: 'OpenSource',
    Type: 'Library'
}

var ChangerJSData = {};
var ChangerJSDetector = 0;

var ChangeJSOldArray = {};

const config = [{
    ErrorMessages: true,
    InfoMessage: true,
    InputTypes: [
        'checkbox',
        'color',
        'data',
        'datetime-local',
        'email',
        'file',
        'month',
        'number',
        'password',
        'radio',
        'range',
        'tel',
        'text',
        'time',
        'url',
        'week'
    ],
    SupportedTypes: [
        'textarea'
    ]
}];

if (config[0].InfoMessage) console.info(JSON.stringify(Information, null, 2));

class Error {
    constructor(message) {
        this.message = message;
        (config[0].ErrorMessages) ? console.error(message): '';
    }
}

class Randomint {
    constructor(length) {
        this.length = length;
    }
    generate() {
        let chars = '0123456789';
        let int = '';
        for (let i = 0; i <= this.length; i++) {
            int += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return int;
    }
}

class onChanges {
    constructor(obj) {
        const event = new CustomEvent('onChanges', {
            detail: {
                isDataChanged: ChangerJSDetector,
                changes: obj
            }
        })

        window.dispatchEvent(event);
    }
}

class checkSupportedType {
    constructor(el) {
        this.el = el;
    }
    check() {
        if (config[0].InputTypes.indexOf(this.el.type) !== -1 || config[0].SupportedTypes.indexOf(this.el.tagName.toLowerCase()) !== -1) {
            return true;
        } else {
            return false;
        }
    }
}

document.querySelectorAll('.ChangerJSInput').forEach(function (el) {
    if (new checkSupportedType(el).check()) {

        let OldValue = (el.value === undefined) ? '' : el.value;

        let changerID = new Randomint(10).generate();

        let newobj = {
            id: changerID,
            divID: el.id || '',
            OldValue,
            NewValue: OldValue
        }

        let oldobj = {
            id: changerID,
            divID: el.id || '',
            OldValue,
            NewValue: OldValue
        }

        el.dataset.changerjs = changerID;

        ChangerJSData[changerID] = newobj;
        ChangeJSOldArray[changerID] = oldobj;


        el.addEventListener('change', function ({
            target
        }) {
            let ChangerJSDataTag = target.dataset.changerjs;
            let InputData = (target.type === 'file') ? target.files[0] : target.value;

            for (let i in ChangerJSData) {
                if (ChangerJSData[i].id === ChangerJSDataTag) ChangerJSData[i].NewValue = InputData;

                if (ChangerJSData[i].NewValue !== ChangerJSData[i].OldValue) {
                    ChangerJSData[i].hasChanged = true;
                } else {
                    ChangerJSData[i].hasChanged = false;
                }
            }

            if (JSON.stringify(ChangerJSData) !== JSON.stringify(ChangeJSOldArray)) ChangerJSDetector = true;
            else ChangerJSDetector = false

            new onChanges(ChangerJSData);
        })
    } else {
        new Error(`Not supported type detected: ${ (el.type) ? el.type : el.tagName.toLowerCase()}`);
    }
});