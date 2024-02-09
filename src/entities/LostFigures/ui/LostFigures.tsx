import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LostFigures.module.scss';
import { type Figure } from 'shared/models/figures/Figure';

interface LostFiguresProps {
    className?: string
    title: string
    figures: Figure[]
}

export const LostFigures = (props: LostFiguresProps) => {
    const { className, title, figures } = props;

    return (
        <div className={classNames(cls.LostFigures, {}, [className])}>
            <h3>{title}</h3>

            <div className={cls.LostFigures__icons} >
                {figures.map(figure => (
                    <img src={figure.logo} key={figure.id} />
                ))}
            </div>
        </div>
    );
};

LostFigures.displayName = 'LostFigures';
