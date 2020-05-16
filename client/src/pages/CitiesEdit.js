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
import CitiesActions from "../redux/actions/CitiesActions";
import UserProfilesActions from "../redux/actions/UserProfilesActions";

// END IMPORT ACTIONS

/** APIs

* actionsCities.create
*	@description CRUD ACTION create
*
* actionsCities.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsCities.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsUserProfiles.list
*	@description CRUD ACTION list
*

**/

class CitiesEdit extends Component {
  // Init cities
  constructor(props) {
    super(props);
    this.state = {
      cities: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsCities.loadCities(this.props.match.params.id);
    }
    
    this.props.actionsUserProfiles.loadUserProfilesList();
  }

  // Insert props cities in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      cities: props.cities
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.cities._id) {
      this.props.actionsCities.saveCities(this.state.cities).then(data => {
        this.props.history.push("/cities/");
      });
    } else {
      this.props.actionsCities.createCities(this.state.cities).then(data => {
        this.props.history.push("/cities/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Cities Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="CityName"
            label="CityName"
            value={this.state.cities.CityName || ""}
            onChange={Utils.handleChange.bind(this, "cities")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.cities.CityName && this.state.cities.CityName === ""
              ? { error: true }
              : {})}
          />
          
          {/* RELATIONS */}

          <h2 className="mb-20">Relations</h2>
          
          {/* Relation 1:m CityName with UserProfiles */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel shrink htmlFor="CityName">
              CityName
            </InputLabel>
            <Select
              value={this.state.cities.CityName || ""}
              onChange={Utils.handleChangeSelect.bind(this, "cities")}
              inputProps={{
                id: "CityName",
                name: "CityName"
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
            <Link to="/cities/">Back to list</Link>

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
    actionsCities: bindActionCreators(CitiesActions, dispatch),
    actionsUserProfiles: bindActionCreators(UserProfilesActions, dispatch),
  };
};

// Validate types
CitiesEdit.propTypes = { 
  actionsCities: PropTypes.object.isRequired,
  actionsUserProfiles: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    cities: state.CitiesEditReducer.cities,
    listUserProfiles: state.CitiesEditReducer.listUserProfiles
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CitiesEdit);
