import styled from 'styled-components';
import Select from 'react-select';
import HashLoader from 'react-spinners/HashLoader';

const StyleSelect = styled(Select)`
    width: 15em;
`;

const DivContainer = styled.div`
    display:flex;
    flex-direction:row;
`;

function WelcomePage({ onDriveSelect, loadOptions, options, isLoading }) {
    function handleSelectChange(selectedDrive, { action }) {
        switch (action) {
            case 'select-option':
                if (selectedDrive) {
                    onDriveSelect(selectedDrive.value);
                }
                break;
            default:
                break;
        }
    }
    function onMenuOpen() {
        if (!options) {
            loadOptions();
        }
    }
    return (
        <>
            <div>
                welcome to File Manager!
            </div>
            <DivContainer>
                <div>
                    please choose disk drive:
                </div>
                <StyleSelect
                    options={options}
                    onChange={handleSelectChange}
                    onMenuOpen={onMenuOpen}>
                </StyleSelect>
                {isLoading && <HashLoader></HashLoader>}
            </DivContainer>
        </>
    );
}

export default WelcomePage;