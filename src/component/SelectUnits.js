import React from "react";
// This component is specailly designed for change units. User can set to choose between Imperial vs Metric

export const SelectUnits = (props) => {
    return (
        <div className="row">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="unitsselect">
                        Choose Units
                    </label>
                </div>
                <select
                    class="custom-select"
                    id="unitsselect"
                    value={props.metric}
                    onChange={(e) => props.setMetric(e.target.value)}
                >
                    <option value="metric" selected>
                        Metric
                    </option>
                    <option value="imperial">Imperial</option>
                </select>
            </div>
        </div>
    );
};
