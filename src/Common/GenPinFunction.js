//To check Duplicate numbers
export const checkDupNum = (input) => {
    let pinStr = input + "";
    let isDup = false;
    if (input && input.toString().length >= 2) {
        for (let i = 0; i < pinStr.length; i++) {
            if (i !== pinStr.length - 1) {
                if (pinStr[i] === pinStr[i + 1]) {
                    isDup = true;
                    break;
                }
            }
        }
    }
    return isDup;
}

//To check ascending sequence
export const checkAscendNumbers = (input) => {
    let firstDigit = input.charAt(0);
    let secondDigit = input.charAt(1);
    let thirdDigit = input.charAt(2);
    let firstNum = parseInt(firstDigit + "");
    let secondNum = parseInt(secondDigit + "");
    let thirdNum = parseInt(thirdDigit + "");
    if (firstNum + 1 === secondNum && firstNum + 2 === thirdNum) {
        return true;
    }
    return false;
}

//To check descending sequence
export const checkDescendNumbers = (input) => {
    const reverseNum = [];
    const length = input.length - 1;
    for (let i = length; i >= 0; i--) {
        reverseNum.push(input[i]);
    }
    return reverseNum.join('');
}

//To check Consecutive numbers
export const checkConseqNum = (input) => {
    let pinStr = input + "";
    let firstStr = pinStr.substring(0, 3);
    let secondStr = pinStr.substring(1, 4);
    let reverseNum = checkDescendNumbers(pinStr);
    let firstStrRev = reverseNum.substring(0, 3);
    let secondStrRev = reverseNum.substring(1, 4);
    if (checkAscendNumbers(firstStr) || checkAscendNumbers(secondStr)
        || checkAscendNumbers(firstStrRev) || checkAscendNumbers(secondStrRev)) {
        return true;
    }

    return false;
}

//To check Unique pins in pin array
export const checkUniqPins = (input) => {
    let newArray = [];
    if (input && input.length > 0) {
        let firstArrayVal = input[0];
        if (firstArrayVal) {
            for (let i = 0; i < input.length; i++) {
                if (firstArrayVal !== input[i + 1]) {
                    newArray.push(firstArrayVal);
                    firstArrayVal = input[i + 1]
                } else {
                    firstArrayVal = Math.floor(Math.random() * 10000);
                    if (!checkDupNum(firstArrayVal) && !checkConseqNum(firstArrayVal) && !input.includes(firstArrayVal)) {
                        input[i] = firstArrayVal;
                    }
                }
            }
        }
    }
    return newArray;
}

//Function to Generate Pins
export const GenPinFunction = () => {
    let i = 0;
    let pinArray = [];
    while (i <= 4) {
        let newPin;
        let genPin = Math.floor(Math.random() * 10000);
        //To check generated pin length
        if (genPin && genPin.toString().length === 4) {
            newPin = genPin;
        }
        else if (genPin && genPin.toString().length === 3) {
            let pinVal = "0" + genPin;
            newPin = pinVal;
        }
        else if (genPin && (genPin.toString().length === 2 || genPin.toString().length === 1)) {
            // 1 digit and 2 digit pins ignored since we are adding 0's for insufficient digits and if we add it for 1 digit or 2 digit pins, it may give sequence of 0's like 00 or 000 which is wrong
            continue;
        }
        let updatedPinseq = newPin + "";
        if (!checkDupNum(updatedPinseq) && !checkConseqNum(updatedPinseq) && !pinArray.includes(updatedPinseq)) {
            pinArray[i] = updatedPinseq;
            i++;
        }
    }
    pinArray = checkUniqPins(pinArray);
    return pinArray;
}
