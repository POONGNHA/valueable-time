import { useState } from "react";

const minutes = 3 * 60 * 1000;
const interval = 1000;
const [time_left, setTimeleft] = useState<number>(minutes);

