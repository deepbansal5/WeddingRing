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
import StatesActions from "../redux/actions/StatesActions";
import UserProfilesActions from "../redux/actions/UserProfilesActions";

// END IMPORT ACTIONS

/** APIs

* actionsStates.create
*	@description CRUD ACTION create
*
* actionsStates.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsStates.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsUserProfiles.list
*	@description CRUD ACTION list
*

**/

class StatesEdit extends Component {
  // Init states
  constructor(props) {
    super(props);
    this.state = {
      states: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsStates.loadStates(this.props.match.params.id);
    }
    
    this.props.actionsUserProfiles.loadUserProfilesList();
  }

  // Insert props states in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      states: props.states
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.states._id) {
      this.props.actionsStates.saveStates(this.state.states).then(data => {
        this.props.history.push("/stateses/");
      });
    } else {
      this.props.actionsStates.createStates(this.state.states).then(data => {
        this.props.history.push("/stateses/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>States Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="Name"
            label="Name"
            value={this.state.states.Name || ""}
            onChange={Utils.handleChange.bind(this, "states")}
            margin="normal"
            fullWidth
          />
          
          {/* RELATIONS */}

          <h2 className="mb-20">Relations</h2>
          
          {/* Relation 1:m currentState with UserProfiles */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel shrink htmlFor="currentState">
              CurrentState
            </InputLabel>
            <Select
              value={this.state.states.currentState || ""}
              onChange={Utils.handleChangeSelect.bind(this, "states")}
              inputProps={{
                id: "currentState",
                name: "currentState"
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
            <Link to="/stateses/">Back to list</Link>

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
    actionsStates: bindActionCreators(StatesActions, dispatch),
    actionsUserProfiles: bindActionCreators(UserProfilesActions, dispatch),
  };
};

// Validate types
StatesEdit.propTypes = { 
  actionsStates: PropTypes.object.isRequired,
  actionsUserProfiles: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    states: state.StatesEditReducer.states,
    listUserProfiles: state.StatesEditReducer.listUserProfiles
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StatesEdit);
