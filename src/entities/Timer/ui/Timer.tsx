import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useEffect, useRef, useState } from 'react';
import cls from './Timer.module.scss';
import { type Player } from 'shared/models/Player';
import { Colors } from 'shared/models/Colors';

interface TimerProps {
    currentPlayer: Player | null
    restart: () => void
}

export const Timer = memo((props: TimerProps) => {
    const { currentPlayer, restart } = props;
    const [blackTimer, setBlackTimer] = useState(300);
    const [whiteTimer, setWhiteTimer] = useState(300);
    const timer = useRef<null | ReturnType<typeof setInterval>>(null);

    useEffect(() => {
        startTimer()
    }, [currentPlayer]);

    function startTimer() {
        if (timer.current) {
            clearInterval(timer.current);
        }

        const callback = currentPlayer?.color === Colors.WHITE ? blackTimerDecrement : whiteTimerDecrement;
        timer.current = setInterval(callback, 1000);
    }

    function blackTimerDecrement() {
        setBlackTimer(prev => prev - 1);
    }

    function whiteTimerDecrement() {
        setWhiteTimer(prev => prev - 1);
    }

    function handleRestart() {
        setWhiteTimer(300);
        setBlackTimer(300);
        restart();
    }

    return (
        <div className={classNames(cls.Timer, {}, [])}>
            <button onClick={handleRestart}>Restart</button>
            <div className={cls.Timer__timers}>
                <h2>Black - {whiteTimer}</h2>
                <h2>White - {blackTimer}</h2>
            </div>
        </div>
    );
});

Timer.displayName = 'Timer';
