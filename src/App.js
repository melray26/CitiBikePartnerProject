import "./styles.css";
import React, { Component } from "react";
// import data from "./citibike-data";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryStack
} from "victory";

let data = [
  {
    ride_id: "67ACB5057B0B0127",
    rideable_type: "classic_bike",
    started_at: "2022-02-14 17:04:29",
    ended_at: "2022-02-14 17:17:40",
    start_station_name: "Christ Hospital",
    start_station_id: "JC034",
    end_station_name: "Church Sq Park - 5 St & Park Ave",
    end_station_id: "HB601",
    start_lat: "40.734785818",
    start_lng: "-74.050443636",
    end_lat: "40.74265933273143",
    end_lng: "-74.03223305940628",
    member_casual: "member"
  },
  {
    ride_id: "140531B16E93D6A4",
    rideable_type: "classic_bike",
    started_at: "2022-02-16 08:14:30",
    ended_at: "2022-02-16 08:29:52",
    start_station_name: "Glenwood Ave",
    start_station_id: "JC094",
    end_station_name: "Warren St",
    end_station_id: "JC006",
    start_lat: "40.72755146730012",
    start_lng: "-74.07106071710587",
    end_lat: "40.7211236",
    end_lng: "-74.03805095",
    member_casual: "member"
  },
  {
    ride_id: "D6F07F9B226AECAC",
    rideable_type: "classic_bike",
    started_at: "2022-02-21 17:09:02",
    ended_at: "2022-02-21 17:18:52",
    start_station_name: "Christ Hospital",
    start_station_id: "JC034",
    end_station_name: "Hamilton Park",
    end_station_id: "JC009",
    start_lat: "40.734785818",
    start_lng: "-74.050443636",
    end_lat: "40.727595966",
    end_lng: "-74.044247311",
    member_casual: "member"
  },
  {
    ride_id: "359F2460B211147A",
    rideable_type: "classic_bike",
    started_at: "2022-02-27 16:15:45",
    ended_at: "2022-02-27 16:25:42",
    start_station_name: "Columbus Park - Clinton St & 9 St",
    start_station_id: "HB501",
    end_station_name: "City Hall - Washington St & 1 St",
    end_station_id: "HB105",
    start_lat: "40.74816121065146",
    start_lng: "-74.0324530005455",
    end_lat: "40.73736",
    end_lng: "-74.03097",
    member_casual: "casual"
  },
  {
    ride_id: "DB573F29238D7021",
    rideable_type: "classic_bike",
    started_at: "2022-02-19 14:20:49",
    ended_at: "2022-02-19 14:47:16",
    start_station_name: "Clinton St & Newark St",
    start_station_id: "HB409",
    end_station_name: "5 Corners Library",
    end_station_id: "JC018",
    start_lat: "40.73743",
    start_lng: "-74.03571",
    end_lat: "40.734961020009514",
    end_lng: "-74.0595030784607",
    member_casual: "casual"
  },
  {
    ride_id: "76C0C0CEA23F30CC",
    rideable_type: "classic_bike",
    started_at: "2022-02-12 18:01:53",
    ended_at: "2022-02-12 18:08:41",
    start_station_name: "Adams St & 2 St",
    start_station_id: "HB407",
    end_station_name: "Madison St & 10 St",
    end_station_id: "HB503",
    start_lat: "40.73981372311843",
    start_lng: "-74.03690412640572",
    end_lat: "40.74994325412246",
    end_lng: "-74.03586477041245",
    member_casual: "casual"
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <VictoryChart domainPadding={20} theme={VictoryTheme.material}>
          <VictoryAxis
            tickValues={[1, 2, 3, 4]}
            tickFormat={["Rider 1", "Rider 2", "Rider 3", "Rider 4"]}
          />

          <VictoryAxis dependentAxis tickFormat={(x) => `$${x / 1000}k`} />

          <VictoryStack>
            <VictoryBar data={data} x="start_lat" y="end_lat" />
            <VictoryBar data={data} x="start_lat" y="end_lat" />
            <VictoryBar data={data} x="start_lat" y="end_lat" />
            <VictoryBar data={data} x="start_lat" y="end_lat" />
          </VictoryStack>
        </VictoryChart>
      </div>
    );
  }
}

export default App;
