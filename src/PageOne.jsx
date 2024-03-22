import NestedLevelOne from "./NestedLevelOne";
import DataProvider from "./context/DataContext";

export default function PageOne() {
    return (
        <main>
            <h1>Tjoho!</h1>
            <DataProvider>
                <NestedLevelOne />
            </DataProvider>
        </main>
    )
}