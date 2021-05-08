import { Button } from '@material-ui/core'

function TestMaterialUI() {
    return (
        <div>
            <Button>This is our first button in material-ui</Button>
            <Button variant="contained">Default</Button>
            <Button variant="contained" color="primary">
                Primary
            </Button>
            <Button variant="contained" color="secondary">
                Secondary
            </Button>
            <Button variant="contained" disabled>
                Disabled
            </Button>
            <Button variant="contained" color="primary" href="#contained-buttons">
                Link
            </Button>
        </div>
    );
}

export default TestMaterialUI;