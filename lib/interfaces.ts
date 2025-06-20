interface Status {
    State: string;
    Health?: string;
}

interface FanData {
    CurrentReading: number;
    FanName: string;
    Oem: string[];
    Status: Status;
    Units: string;
}

interface TemperaturesData {
    CurrentReading: number;
    Name: string;
    Number: number;
    Oem: string[];
    PhysicalContext: string,
    ReadingCelsius: number,
    Status: Status;
    Units: string;
    UpperThresholdCritical: number;
    UpperThresholdFatal: number;
    UpperThresholdUser: number;
}

interface PowerData {
    PowerMetrics: number;
    IntervalInMin: number;
    MaxConsumedWatts: number;
    MinConsumedWatts: number;
}

interface Tab {
    value: string;
};


interface HeaderProps {
    tabs?: Tab[];
    children?: React.ReactNode;
}
