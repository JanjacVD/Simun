export const customStyles = {
  control: (provided:any) => ({
    ...provided,
    border: '1px solid #718096',
    borderRadius: '0.375rem',
    backgroundColor: '#2D3748',
    color: '#E2E8F0',
    boxShadow: 'none',
    '&:hover': {
      borderColor: '#4299E1',
    },
  }),
  option: (provided:any, state:any) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#4299E1' : '#2D3748',
    color: state.isSelected ? '#FFFFFF' : '#E2E8F0',
    textTransform:"capitalize"
  }),
  menu: (provided:any) => ({
    ...provided,
    backgroundColor: 'transparent',
  }),
  multiValue: (provided:any) => ({
    ...provided,
    backgroundColor: '#4299E1',
  }),
  multiValueLabel: (provided:any) => ({
    ...provided,
    color: '#FFFFFF',
  }),

  multiValueRemove: (provided:any) => ({
    ...provided,
    color: '#FFFFFF',
    '&:hover': {
      backgroundColor: '#4299E1',
      color: '#FFFFFF',
    },
  }),
  };
