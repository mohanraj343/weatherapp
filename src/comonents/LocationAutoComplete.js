import { Autocomplete, TextField } from '@mui/material';
import React, { useState } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

export default function LocationAutoComplete() {
    const [address, setAddress] = useState('');

    const handleChange = (address) => {
      setAddress(address);
    };
  
    const handleSelect = async (address) => {
      try {
        const results = await geocodeByAddress(address);
        const latLng = await getLatLng(results[0]);
        console.log('Latitude and Longitude:', latLng);
      } catch (error) {
        console.error('Error:', error);
      }
    };

  return (
    <PlacesAutocomplete
    value={address}
    onChange={handleChange}
    onSelect={handleSelect}
  >
    {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
      <div>
        <input
      
          {...getInputProps({
            placeholder: 'Enter a location...',
            className: 'location-search-input input',
          })}
        />
        <div className="autocomplete-dropdown-container">
          {loading && <div>Loading...</div>}
          
          {suggestions.map((suggestion) => {
            const className = suggestion.active
              ? 'suggestion-item--active'
              : 'suggestion-item';
            const style = suggestion.active
              ? { backgroundColor: '#fafafa', cursor: 'pointer' }
              : { backgroundColor: '#ffffff', cursor: 'pointer' };
            return (
              <div
                {...getSuggestionItemProps(suggestion, {
                  className,
                  style,
                })}
                style={{
                  padding:"8px"
                }}
              >
                <span>{suggestion.description}</span>
              </div>
            );
          })}
        </div>
      </div>
    )}
  </PlacesAutocomplete>
  )
}
