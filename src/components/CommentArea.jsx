// Comment Area
import { Component } from "react";
const url = "https://striveschool-api.herokuapp.com/api/comments/";
class CommentArea extends Component {
  state = {
    review: [],
  };

  fetchComment = () => {
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.elementId}`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUxYTFjNjRjNTllYzAwMTk5MGQ3MTUiLCJpYXQiOjE3MTA0MjY0NTAsImV4cCI6MTcxMTYzNjA1MH0.by3gpOjiSG1rajbrasJA7RWdqU93EFKfo8mZ0UrnIn8",
      },
    })
      .then((response) => {
        console.log(response);

        if (!response.ok) {
          if (response.status === 400) {
            throw new Error("400 - Errore lato client");
          }

          if (response.status === 404) {
            throw new Error("404 - Dato non trovato");
          }

          if (response.status === 500) {
            throw new Error("500 - Errore lato server");
          }

          throw new Error("Errore nel reperimento dati");
        }

        return response.json();
      })
      .then((commentFromApi) => {
        console.log("COMMENT", commentFromApi);
        // qua tra poco le salveremo anche nello state...
        this.setState({
          review: commentFromApi,
        });
      })
      .catch((error) => {
        console.log("ERRORE", error);
      });
  };

  componentDidMount() {
    this.fetchComment();
  }

  render() {
    const { review } = this.state;

    return (
      <div>
        {review.map((review, index) => (
          <div key={index}>
            <div>
              {review.comment} Rating: {review.rate}/5
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default CommentArea;
