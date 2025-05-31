import React from 'react';

const styles = {
  input: {
    borderRadius: 18,
    padding: '12px 16px',
    width: '100%',
    marginBottom: '16px',
    border: '1px solid #ccc',
    outline: 'none',
    fontSize: '16px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)',
  },
  inputFocus: {
    borderColor: '#7c3aed', // purple-500
    boxShadow: '0 0 0 3px rgba(124, 58, 237, 0.3)',
  },
};

class SearchBar extends React.Component {
  state = {
    isFocused: false,
  };

  handleFocus = () => this.setState({ isFocused: true });
  handleBlur = () => this.setState({ isFocused: false });

  render() {
    const { onSearch } = this.props;
    const { isFocused } = this.state;

    return (
      <input
        type="text"
        placeholder="Search by name or email..."
        onChange={(e) => onSearch(e.target.value)}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        style={{
          ...styles.input,
          ...(isFocused ? styles.inputFocus : {}),
        }}
      />
    );
  }
}

export default SearchBar;
