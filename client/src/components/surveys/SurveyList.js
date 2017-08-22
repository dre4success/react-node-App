import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys, deleteSurveys } from "../../actions";
import { Link } from "react-router-dom";

class SurveyList extends Component {
	componentDidMount() {
		this.props.fetchSurveys();
	}

	renderSurveys() {
		console.log(this.props.surveys);
		return this.props.surveys.reverse().map(survey => {
			return (
				<div className="card darken-1" key={survey._id}>
					<div className="card-content">
						<span className="card-title">
							{survey.title}
						</span>
						<p>
							{survey.body}
						</p>
						<p>
							Sender: {survey.from}
						</p>
						<p className="right">
							Sent On: {new Date(survey.dateSent).toLocaleDateString()}
						</p>
					</div>
					<div className="card-action">
						<a>
							Yes: {survey.yes}
						</a>
						<a>
							No: {survey.no}
						</a>
						<Link
							to={this.props}
							onClick={() => this.props.deleteSurveys(survey._id)}
						>
							<i className="material-icons right">delete</i>
						</Link>
					</div>
				</div>
			);
		});
	}

	render() {
		return (
			<div>
				{this.renderSurveys()}
			</div>
		);
	}
}

function mapStateToProps({ surveys }) {
	return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys, deleteSurveys })(
	SurveyList
);
