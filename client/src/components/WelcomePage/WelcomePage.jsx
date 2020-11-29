import Select from 'react-select';

function WelcomePage({ onDriveSelect }) {
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
    return (
        <>
            <div>
                welcome to File Manager!
        </div>
            <div>
                please choose disk drive: <Select
                    options={[{ value: 'D:\\', label: 'D' }, { value: 'C:\\', label: 'C' }]}
                    onChange={handleSelectChange}></Select>
            </div>
        </>
    );
}

export default WelcomePage;