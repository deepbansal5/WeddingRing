// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Utils from "../utils/utils";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

// Custom Actions


// START IMPORT ACTIONS
import MaritalstatusActions from "../redux/actions/MaritalstatusActions";
import UserProfilesActions from "../redux/actions/UserProfilesActions";

// END IMPORT ACTIONS

/** APIs

* actionsMaritalstatus.create
*	@description CRUD ACTION create
*
* actionsMaritalstatus.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsMaritalstatus.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsUserProfiles.list
*	@description CRUD ACTION list
*

**/

class MaritalstatusEdit extends Component {
  // Init maritalstatus
  constructor(props) {
    super(props);
    this.state = {
      maritalstatus: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsMaritalstatus.loadMaritalstatus(this.props.match.params.id);
    }
    
    this.props.actionsUserProfiles.loadUserProfilesList();
  }

  // Insert props maritalstatus in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      maritalstatus: props.maritalstatus
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.maritalstatus._id) {
      this.props.actionsMaritalstatus.saveMaritalstatus(this.state.maritalstatus).then(data => {
        this.props.history.push("/maritalstatuses/");
      });
    } else {
      this.props.actionsMaritalstatus.createMaritalstatus(this.state.maritalstatus).then(data => {
        this.props.history.push("/maritalstatuses/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Maritalstatus Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="Maritalstatus"
            label="Maritalstatus"
            value={this.state.maritalstatus.Maritalstatus || ""}
            onChange={Utils.handleChange.bind(this, "maritalstatus")}
            margin="normal"
            fullWidth
          />
          
          {/* RELATIONS */}

          <h2 className="mb-20">Relations</h2>
          
          {/* Relation 1:m MartialStatus with UserProfiles */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel shrink htmlFor="MartialStatus">
              MartialStatus
            </InputLabel>
            <Select
              value={this.state.maritalstatus.MartialStatus || ""}
              onChange={Utils.handleChangeSelect.bind(this, "maritalstatus")}
              inputProps={{
                id: "MartialStatus",
                name: "MartialStatus"
              }}
              fullWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {this.props.listUserProfiles && this.props.listUserProfiles.map(row => (
                <MenuItem value={row._id} key={row._id}>
                  {row._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          
          {/* Footer */}
          <div className="footer-card">
            <Link to="/maritalstatuses/">Back to list</Link>

            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsMaritalstatus: bindActionCreators(MaritalstatusActions, dispatch),
    actionsUserProfiles: bindActionCreators(UserProfilesActions, dispatch),
  };
};

// Validate types
MaritalstatusEdit.propTypes = { 
  actionsMaritalstatus: PropTypes.object.isRequired,
  actionsUserProfiles: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    maritalstatus: state.MaritalstatusEditReducer.maritalstatus,
    listUserProfiles: state.MaritalstatusEditReducer.listUserProfiles
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MaritalstatusEdit);
