import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Classes from './GenPinApp.module.css';
import { Link } from "react-router-dom";

class NavigationPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGenerateActive: true, isSavedActive: false
        }
    }

    generateTabClick = () => {
        this.setState({ isGenerateActive: true, isSavedActive: false });
    }

    savedTabClick = () => {
        this.setState({ isSavedActive: true, isGenerateActive: false });
    }

    render() {
        let isGenerateActive = this.state.isGenerateActive && (window.location.href.indexOf("/SavedPinList") === -1);
        let isSavedActive = (this.state.isSavedActive === true || (window.location.href.indexOf("/SavedPinList") > -1)) ? true : false;

        return (
            <React.Fragment>
                <Container>
                    <Row className={Classes.tabsRow}>
                        <Col xs lg={{ span: 2, offset: 1 }} className={isGenerateActive ? Classes.activeTab : Classes.generateTabClass}><Link onClick={this.generateTabClick} to="/">Generate</Link></Col>
                        <Col xs lg={{ span: 2, offset: 2 }} className={isSavedActive ? Classes.activeSavedTab : Classes.savedTabClass}><Link onClick={this.savedTabClick} to="/SavedPinList">Saved</Link></Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }

}

export default NavigationPanel;
