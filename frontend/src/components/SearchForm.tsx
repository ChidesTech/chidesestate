import { faBed, faCalendarDays, faPerson } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./SearchForm.css";
import { DateRange } from "react-date-range";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from "date-fns";

export default function SearchForm() {
    interface OptionsInterface {
        adults: number,
        children?: number,
        rooms: number
    }
    const [destination, setDestination] = useState<string>()
    const [openDatePicker, setOpenDatePicker] = useState(false);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState<any>({
        adults: 1,
        children: 0,
        rooms: 1
    })
    const [date, setDate] = useState<any>([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const changeOptions: Function = (option: string, operation: string) => {
        setOptions((prev: OptionsInterface) => {
            return {
                ...prev, [option]: operation === "+" ? options[option] + 1 :
                    operation === "-" && options[option] === 1 && (option === "adults" || option === "rooms") ? 1 :
                        options[option] === 0 && option === "children" ? 0 :
                            options[option] - 1
            }
        })
    }


    return <>
        <div className="headerSearch">
            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input
                    type="text"
                    placeholder="Where are you going?"
                    className="headerSearchInput"
                    onChange={(e) => setDestination(e.target.value)}
                />
            </div>
            <div className="headerSearchItem">
                <FontAwesomeIcon onClick={() => { setOpenDatePicker(!openDatePicker); setOpenOptions(false) }} icon={faCalendarDays} className="headerIcon" />
                <span onClick={() => { setOpenDatePicker(!openDatePicker); setOpenOptions(false) }} className="headerSearchText">{format(date[0].startDate, "dd/MM/yyyy")} to {format(date[0].endDate, "dd/MM/yyyy")}</span>
                {openDatePicker && <DateRange
                    editableDateInputs={true}
                    onChange={(item: any) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date-range-picker"
                    rangeColors={["palevioletred"]}
                />}
            </div>
            <div className="headerSearchItem">
                <FontAwesomeIcon onClick={() => { setOpenOptions(!openOptions); setOpenDatePicker(false) }} icon={faPerson} className="headerIcon" />
                <span onClick={() => { setOpenOptions(!openOptions); setOpenDatePicker(false) }} className="headerSearchText">{options.adults} adults {options.children} children {options.rooms} rooms</span>
                {openOptions && <div className="options">
                    <div className="optionItem">
                        <span className="optionText">Adult</span>
                        <div className="optionCounter">
                            <button onClick={() => changeOptions("adults", "-")} className="optionCounterButton">-</button>
                            <span className="optionCounterNumber">{options.adults}</span>
                            <button onClick={() => changeOptions("adults", "+")} className="optionCounterButton">+</button>
                        </div>
                    </div>
                    <div className="optionItem">
                        <span className="optionText">Children</span>
                        <div className="optionCounter">
                            <button onClick={() => changeOptions("children", "-")} className="optionCounterButton">-</button>
                            <span className="optionCounterNumber">{options.children}</span>
                            <button onClick={() => changeOptions("children", "+")} className="optionCounterButton">+</button>
                        </div>

                    </div>
                    <div className="optionItem">
                        <span className="optionText">Room</span>
                        <div className="optionCounter">
                            <button onClick={() => changeOptions("rooms", "-")} className="optionCounterButton">-</button>
                            <span className="optionCounterNumber">{options.rooms}</span>
                            <button onClick={() => changeOptions("rooms", "+")} className="optionCounterButton">+</button>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mb-3">
                    <button onClick={() => { setOpenOptions(false); }} className="btn btn-sm btn-primary text-center">OK</button>

                    </div>
                </div>
                }

            </div>
            <div className="headerSearchItem">
                <button className="btn btn-primary w-100"> <i className="fa fa-search"></i> Search</button>

            </div>
        </div>
    </>
}