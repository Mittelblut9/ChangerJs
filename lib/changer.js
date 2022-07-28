const Information = {
    name: 'ChangerJS',
    Author: 'www.blackdayz.de',
    Version: '0.0.2',
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

document.querySelectorAll('.ChangerJSInput').forEach(function (el) {
    if (config[0].InputTypes.indexOf(el.type) !== -1) {

        let OldValue = (el.value === undefined) ? '' : el.value;

        let changerID = new Randomint(10).generate();

        let newobj = {
            divID: el.id || '',
            OldValue,
            NewValue: OldValue
        }

        let oldobj = {
            divID: el.id || '',
            OldValue,
            NewValue: OldValue
        }

        el.dataset.changerjs = changerID;

        ChangerJSData[changerID] = newobj;
        ChangeJSOldArray[changerID] = oldobj;
    } else {
        new Error("Invalid Input Type: " + el.type)
    }

    el.addEventListener('change', function ({
        target
    }) {
        if (config[0].InputTypes.indexOf(target.type) !== -1) {

            let ChangerJSDataTag = target.dataset.changerjs;
            let InputData = (target.type === 'file') ? target.files[0] : target.value;

            for (let i in ChangerJSData) {
                if (ChangerJSData[i].changerID === ChangerJSDataTag) ChangerJSData[i].NewValue = InputData;

                if (ChangerJSData[i].NewValue !== ChangerJSData[i].OldValue) {
                    ChangerJSData[i].hasChanged = true;
                } else {
                    ChangerJSData[i].hasChanged = false;
                }
            }

            if (JSON.stringify(ChangerJSData) !== JSON.stringify(ChangeJSOldArray)) ChangerJSDetector = true;
            else ChangerJSDetector = false

        } else {
            new Error("Invalid Input Type: " + el.type)
        }

        new onChanges(ChangerJSData);
    })
});