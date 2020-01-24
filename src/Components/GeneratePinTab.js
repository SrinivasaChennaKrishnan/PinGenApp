import React from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Classes from './GenPinApp.module.css';
import NavigationPanel from './NavigationPanel';
import { GenPinFunction } from '../Common/GenPinFunction';
import { generatePinAction, savePinAction } from '../Actions/generatePinAction';

class GeneratePinTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            generatedPinArray: ['', '', '', '', '']
        }
    }

    generatePin = () => {
        let generatedPinArrayValue = GenPinFunction();
        this.setState({ generatedPinArray: generatedPinArrayValue });
        generatePinAction(generatedPinArrayValue);
    }

    savePin = () => {
        let savePinObj = {userName:'', p1:'', p2:'', p3:'', p4:'', p5:''};
        let genPinList = this.state.generatedPinArray;
        let userObject = this.props.genPinState.userObject;
        let existingFlag = false;
        console.log("userObjecttttttttttttttttttttttttttt", userObject)
        if(genPinList && genPinList.length > 0){
            if(genPinList[0] !== '' && genPinList[1] !== '' && genPinList[2] !== '' && genPinList[3] !== '' && genPinList[4] !== ''){
                
                for(let i=0;i<userObject.length;i++){
                   if(userObject[i].p1 === genPinList[0] && userObject[i].p2 === genPinList[1] && userObject[i].p3 === genPinList[2] && userObject[i].p4 === genPinList[3] && userObject[i].p5 === genPinList[4]){
                    existingFlag = true;
                   }
                }
                if(existingFlag){
                    window.alert("Pin Already exists in Saved List !!! ")
                }else{
                    savePinObj.userName = "User "+Date.now();
                    savePinObj.p1 = genPinList[0];
                    savePinObj.p2 = genPinList[1];
                    savePinObj.p3 = genPinList[2];
                    savePinObj.p4 = genPinList[3];
                    savePinObj.p5 = genPinList[4];
                    savePinAction(savePinObj);
                }
            }else{
                window.alert("Pin number cannot be empty !!!!");
            }
        }
    }

    render() {
        let generatedPinArray = this.state.generatedPinArray;
        return (
            <React.Fragment>
                <Container>
                    <NavigationPanel />
                    <Container className={Classes.bodyContainer}>
                        <Container className={Classes.generatePinContainer}>
                            <Row>
                                {generatedPinArray.map((item, index) => {
                                    return (
                                        <Col xs lg="2" key={index} className={Classes.pinGenCol}>
                                            <input className={Classes.pinField} type="text" placeholder="1111" readOnly value={item} />
                                        </Col>)
                                })}
                            </Row>
                            <Row>
                                <Col xs lg="5" className={Classes.generateButtonCol}>
                                    <input className={Classes.generateButton} type="button" onClick={() => { this.generatePin() }} value="GENERATE" />
                                </Col>
                                <Col xs lg="5" className={Classes.saveButtonCol}>
                                    <input className={Classes.saveButton} type="button" onClick={() => { this.savePin() }} value="SAVE" />
                                </Col>
                            </Row>
                        </Container>
                    </Container>
                </Container>
            </React.Fragment>
        );
    }

}

const mapStateToProps = (state) =>{
    return{
            genPinState:state
    }
}

export default connect(mapStateToProps)(GeneratePinTab);
