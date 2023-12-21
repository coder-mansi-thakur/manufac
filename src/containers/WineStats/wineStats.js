import React from 'react';
import dataset from '../../data/wineSet.json'

import { calculateMean, calculateMedian, calculateMode } from '../../utils'

// Function to generate table rows for React component
const generateTableRows = () => {
  // Define properties for the table (Mean, Median, Mode)
  const properties = ['Flavanoids Mean', 'Flavanoids Median', 'Flavanoids Mode'];


  // Create an object to store Flavanoids values for each class
  const flavanoidsValuesByClass = {};

  // Populate the flavanoidsValuesByClass object
  dataset.forEach((entry) => {
    const className = entry["Alcohol"];
    const flavanoidsValues = parseFloat(entry["Flavanoids"]);

    if (!flavanoidsValuesByClass[className]) {
      flavanoidsValuesByClass[className] = [];
    }

    flavanoidsValuesByClass[className].push(flavanoidsValues);
  });

  // Generate table rows using the calculated mean for each class
  const statsByClass = Object.keys(flavanoidsValuesByClass).map((className, index) => {
    return {
      [properties[0]]: calculateMean(flavanoidsValuesByClass[className]),
      [properties[1]]: calculateMedian(flavanoidsValuesByClass[className]),
      [properties[2]]: calculateMode(flavanoidsValuesByClass[className])
    }
  });

  const tableRows = properties.map((title) => {
    return (
      <tr key={title}>
        <td>{title}</td>
        {Object.keys(statsByClass).map((className, index) => {
          return (
            <td key={className}>{statsByClass[className][title]}</td>
          )
        })}
      </tr>
    )
  })

  return tableRows;
};

const calculateGammaValue = (ash, hue, magnesium) => ((ash * hue) / magnesium).toFixed(3)

const generateTableRowsForGamma = () => {

  // Define properties for the table (Mean, Median, Mode)
  const properties = ['Gamma Mean', 'Gamma Median', 'Gamma Mode'];

  // Create an object to store gamma values for each class
  const gammaValuesByClass = {};

  // Populate the gammaValuesByClass object
  dataset.forEach((entry) => {
    const className = entry["Alcohol"];
    const gammaValues = calculateGammaValue(entry.Ash, entry.Hue, entry.Magnesium);

    if (!gammaValuesByClass[className]) {
      gammaValuesByClass[className] = [];
    }

    gammaValuesByClass[className].push(Number(gammaValues));
  });

  // Generate table rows using the calculated mean for each class
  const statsByClass = Object.keys(gammaValuesByClass).map((className, index) => {
    return {
      [properties[0]]: calculateMean(gammaValuesByClass[className]),
      [properties[1]]: calculateMedian(gammaValuesByClass[className]),
      [properties[2]]: calculateMode(gammaValuesByClass[className])
    }
  });

  const tableRows = properties.map((title) => {
    return (
      <tr key={title}>
        <td>{title}</td>
        {Object.keys(statsByClass).map((className, index) => {
          return (
            <td key={className}>{statsByClass[className][title]}</td>
          )
        })}
      </tr>
    )
  })

  return tableRows

}


// React component to display the table with rows and columns exchanged
const FlavanoidsTable = () => {

  const groupedByClass = Array.from(new Set(dataset.map(({ Alcohol }) => Alcohol)))

  return (
    <>
      <table data-testid="flavnoids">
        <thead>
          <tr>
            <th>Measure</th>
            {groupedByClass.map((className) => (
              <th key={className}>Class {className}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {generateTableRows()}
        </tbody>
      </table>

      <table>
        <thead>
          <tr>
            <th>Measure</th>
            {groupedByClass.map((className) => (
              <th key={className}>Class {className}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {generateTableRowsForGamma()}
        </tbody>
      </table>


    </>
  );
};

export default FlavanoidsTable;
