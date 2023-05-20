// import CountUp from "react-countup/build/CountUp";
import CountUp from 'react-countup';


const Count = () => {
    return (
        <div>

            <CountUp start={0} end={100} delay={5}>
                {({ countUpRef }) => (
                    <div>
                        <span ref={countUpRef} />
                    </div>
                )}
            </CountUp>

            {/* <CountUp
                start={1}
                end={5000}
                duration={4.75}
                separator=" "
                decimals={4}
                decimal=","
                prefix="EUR "
                suffix=" left"
                onEnd={() => console.log('Ended! 👏')}
                onStart={() => console.log('Started! 💨')}
            >
                {({ countUpRef, start }) => (
                    <div>
                        <span ref={countUpRef} />
                        <button onClick={start}>Start</button>
                    </div>
                )}
            </CountUp> */}
        </div>
    );
};

export default Count;