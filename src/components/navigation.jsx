import React, { Component } from "react";

class navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Navig: [
        {
          id: "1",
          value: "Project"
        },
        {
          id: "2",
          value: "Experiment"
        },
        {
          id: "3",
          value: "Sample"
        },
        {
          id: "4",
          value: "Assay"
        },
        {
          id: "5",
          value: "Genetic map"
        },
        {
          id: "6",
          value: "Result"
        },
        {
          id: "7",
          value: "Tools"
        },
        {
          id: "8",
          value: "Statistics"
        },
        {
          id: "9",
          value: "Admenstration",
          subSection: [
            "User",
            "Crop",
            "Support layout",
            "Protocol",
            "Experiment type",
            "Lab control",
            "Delete Assays",
            "Re Validate Results"
          ],
          show: true
        },
        {
          id: "10",
          value: "Monitoring"
        }
      ]
    };
  }
  toggleCollapse = item => {
    this.setState(prevState => ({
      Navig: prevState.Navig.map(element =>
        element.id === item
          ? { ...element, show: !prevState.Navig[item - 1].show }
          : element
      )
    }));
  };

  render() {
    return (
      <ul className="col-sm-2 navigation-list">
        {this.state.Navig.map(item => (
          <li key={item.id}>
            <button
              className="navigation-item"
              id={item.id}
              data-target={"#" + item.value}
              data-toggle="collapse"
              aria-controls={item.value}
              href={"#" + item.value}
              onClick={item => this.toggleCollapse(item.target.id)}
            >
              {item.value}
            </button>
            <br />
            {item.subSection ? (
              <div
                id={item.value}
                className={item.show === true ? "collapse" : null}
              >
                <ul className="subSection">
                  {item.subSection.map(a => (
                    <li key={a}>
                      <button href="/">{a}</button>
                      <br />
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </li>
        ))}
      </ul>
    );
  }
}
export default navigation;
