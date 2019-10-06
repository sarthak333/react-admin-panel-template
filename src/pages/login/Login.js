import React, { PureComponent } from 'react';
import './login.scss'
import BannerModal from './../../components/bannerModal/BannerModal'
import Button from './../../components/form/button'
import InputItem from './../../components/form/InputItem'



class Login extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      password: "",
    }
    this.passwordField = React.createRef();
  }

  handleKeyPress = (event, target) => {
    if (event.key === 'Enter') {
      if (typeof (target) === "object") {
        target.current.focus();
      }
      else {
        alert(target)
      }
    }
  }

  setReference = (value) => {
    this.passwordField = value
  }

  render() {
    console.log("login render")
    let passwordField


    return (
      <div className="container root-container">
        <div className="row full-page-height root">
          <div className="col-12 center">
            <BannerModal>
              <div className="row full-height banner-root">
                <div className="col-8 info-container full-height center-h">
                  <div className="info-text-container">
                    <h2 className="white-h1">
                      Lorem Ipsum
                    </h2>
                    <p className="white-p" style={{ marginTop: '-4%' }}>

                      Letter wooded direct two men indeed income sister. Impression up admiration he by partiality is. Instantly immediate his saw one day perceived. Old blushes respect but offices hearted minutes effects. Written parties winding oh as in without on started. Residence gentleman yet preserved few convinced. Coming regret simple longer little am sister on. Do danger in to adieus ladies houses oh eldest. Gone pure late gay ham. They sigh were not find are rent.

                  </p>
                  </div>
                </div>
                <div className="col-4 center">
                  <div className="login-form-container center">
                    <div className="form-container">
                      <InputItem
                        autoFocus
                        label="Name"
                        type="underLine"
                        value={this.state.name}
                        onChange={(e) => this.setState({ name: e.target.value })}
                        onKeyPress={(event) => this.handleKeyPress(event, passwordField)}
                      />
                      <InputItem
                        label="Password"
                        type="underLine"
                        value={this.state.password}
                        onChange={(e) => this.setState({ password: e.target.value })}
                        // ref={passwordField}
                        ref={this.passwordField}
                        setReference={this.setReference}
                        onKeyPress={(event) => this.handleKeyPress(event, "submit")}
                      />
                      <Button
                        title="Log in"
                        type="primary"
                        size="button-md"
                        style={{
                          float: 'right',
                          marginTop: '20px'
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </BannerModal>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;