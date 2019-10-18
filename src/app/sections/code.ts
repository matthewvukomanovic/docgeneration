import { Section } from '../section';
import { SectionType } from '../SectionType';
// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
//import {default as _rollupMoment} from 'moment';

//const moment = _rollupMoment || _moment;
const moment = _moment;

export const CODESECTIONS: Section[] = [
{
    name: "Player Details",
    type: SectionType.Section,
    children : [
    {
        name: "Player Name",
        type: SectionType.SubSection,
        children : [
        {
            name: "Player Name In Full",
            type: SectionType.Input,
            id: "Player Name",
            required: true,
            columnSpan: 8,
        }
        ],
    },
    {
        name: "Club Details",
        type: SectionType.SubSection,
        children : [
        {
            name: "Player Registration Number",
            type: SectionType.Input,
            id: "Player Registration Number",
            columnSpan: 2,
        },
        {
            name: "Club Name of Player",
            type: SectionType.Input,
            id: "Club Name of Player",
            columnSpan: 4,
        },
        {
            name: "State",
            id: "Club Details State",
            type: SectionType.Input,
            columnSpan: 2,
        }
        ],
    },
    {
        name: "League Details",
        type: SectionType.SubSection,
        children : [
        {
            name: "League e.g., Saturday Men, Sunday Junior, ...",
            type: SectionType.Input,
            id: "League",
            columnSpan: 4,
        },
        {
            name: "Division e.g., Ladies Div 1, Midweek, ...",
            type: SectionType.Input,
            id: "Division",
            columnSpan: 4,
        },
        ],
    },
    {
        name: "Location",
        type: SectionType.SubSection,
        children : [
        {
            name: "Host Club",
            type: SectionType.Input,
            id: "Host Club",
            columnSpan: 4,
        },
        {
            name: "Suburb/City",
            type: SectionType.Input,
            id: "Host Club Suburb",
            columnSpan: 2,
        },
        {
            name: "State",
            type: SectionType.Input,
            id: "Host Club State",
        },
        {
            name: "Postcode",
            type: SectionType.Input,
            id: "Host Club Postcode",
        },
        ],
    },
    {
        name: "Teams",
        type: SectionType.SubSection,
        children : [
        {
            name: "Team 1",
            type: SectionType.Input,
            children : [],
            id: "Team 1",
            columnSpan: 3,
        },
        {
            name: "vs",
            type: SectionType.Label,
            children : [],
            columnSpan: 2,
        },
        {
            name: "Team 2",
            type: SectionType.Input,
            children : [],
            id: "Team 2",
            columnSpan: 3,
        },
        ],
    },
    ],
},
{
    name: "Offence Details",
    type: SectionType.Section,
    children : [
    {
        name: "Violation",
        type: SectionType.SubSection,
        children : [
        {
            name: "Violation Type",
            type: SectionType.Dropdown,
            required: true,
            key: "violationTypes",
            id: "Violation Type",
            emptyOption: "-> Viloation Type <-",
            columnSpan: 8,
        },
        ],
    },
    {
        name: "Comments regarding the Violation",
        type: SectionType.SubSection,
        required: true,
        extra : {
            rowSpan: 1,
            height: 80,
        },
        children : [
        {
            name: "",
            type: SectionType.MultilineInput,
            id: "Comments regarding the Violation",
            columnSpan: 8,
            extra : {
                rowSpan: 1,
            },
        },
        ],
    },
    {
        name: "Match Name",
        type: SectionType.SubSection,
        children : [
        {
            name: "Name of Event i.e., Singles or Doubles",
            type: SectionType.Input,
            value: "Singles",
            id: "Name of Event",
            columnSpan: 8,
        },
        ],
    },
    {
        name: "Round & Date of Offence",
        type: SectionType.SubSection,
        children : [
        {
            name: "Round of Tennis League Fixture",
            id: "Round of Tennis League Fixture",
            type: SectionType.Input,
            columnSpan: 4,
        },
        {
            name: "Date of Offence",
            type: SectionType.DatePicker,
            value: moment(),
            id: "Date of Offence",
            clearBetweenSessions: true,
            controlOptions: {maxDate:moment()},
            columnSpan: 4,
        },
        ],
    },
    {
        name: "Players involved",
        type: SectionType.SubSection,
        children : [
        {
            name: "All players involved in Incident",
            type: SectionType.Input,
            id: "Players involved",
            columnSpan: 8,
        },
        ],
    },
    ],
},
{
    name: "Penalty Details",
    type: SectionType.Section,
    children: [
    {
        name: "Action Taken By Referee/Match Supervisor",
        type: SectionType.SubSection,
        children: [
        {
            name: "Action Taken",
            id: "Action Taken",
            type: SectionType.Dropdown,
            required: true,
            key: "stepType",
            emptyOption: "",
            useEmptyOption: true,
            columnSpan: 2,
        },
        {
            type: SectionType.MultilineInput,
            required: true,
            id: "Action Taken Comment",
            columnSpan: 6,
            extra : {
                height: 50,
            },
        },
        ]
    },
    ]
},
{
    name: "Referee/Match Supervisor",
    type: SectionType.Section,
    children: [
    {
        name: "Referee/Match Supervisor",
        type: SectionType.SubSection,
        children: [
        {
            name: "Name of Referee/Match Supervisor",
            id: "Name of Referee/Match Supervisor",
            type: SectionType.Input,
            required: true,
            columnSpan: 6,
        },
        {
            name: "Certification (if applicable)",
            id: "Certification Referee/Match Supervisor",
            type: SectionType.Dropdown,
            key: "certificationType",
            useEmptyOption: true,
            columnSpan: 2,
        },
        ]
    },
    ]
},
{
    name: "Witness Name (if applicable, should be neutral third party to the incident)",
    type: SectionType.Section,
    children: [
    {
        name: "Witness",
        type: SectionType.SubSection,
        children: [
        {
            name: "Name",
            id: "Witness Name",
            type: SectionType.Input,
            required: true,
            columnSpan: 6,
        },
        {
            name: "Phone",
            id: "Witness Phone",
            type: SectionType.Input,
            columnSpan: 2,
        },
        ]
    },
    ]
},
{
    name: "Report Copies",
    type: SectionType.Section,
    children: [
    {
        name: "Has a copy of this report been handed or sent to:",
        type: SectionType.SubSection,
        columnSpan: 10,
        extra : {
            alignmentVertical: 'center',
            alignmentHorizontal: 'left',
            rowSpan: 1,
            height: 20,
        },
    },
    {
        name: "The offending player?",
        type: SectionType.SubSection,
        columnSpan: 8,
        extra : {
            alignmentVertical: 'center',
            alignmentHorizontal: 'left',
            rowSpan: 1,
            height: 20,
        },
        children: [{type: SectionType.YesNo, extra : {rowSpan: 1,}},]
    },
    {
        name: "Tennis West?",
        type: SectionType.SubSection,
        columnSpan: 8,
        extra : {
            alignmentVertical: 'center',
            alignmentHorizontal: 'left',
            rowSpan: 1,
            height: 20,
        },
        children: [{type: SectionType.YesNo, extra : {rowSpan: 1,}},]
    },
    {
        name: "The home tennis club to keep on file?",
        type: SectionType.SubSection,
        columnSpan: 8,
        extra : {
            alignmentVertical: 'center',
            alignmentHorizontal: 'left',
            rowSpan: 1,
            height: 20,
        },
        children: [{type: SectionType.YesNo, extra : {rowSpan: 1,}},]
    },
    ]
},
{
    name: "Please Note",
    type: SectionType.Section,
    children: [
        {
            name: `The Referee/Match Supervisor is responsible for submission of any Code of Behaviour Report to Tennis West  Tennis West may investigate the incident if required.  Tennis West will determine an appropriate penalty.
Penalty Points are accumulated when Code Violations are enforced.  When the number of Penalty Points in a TWELVE month period reaches certain levels, disciplinary measures are activated.
Tennis West is responsible for the determination of Penalty Points, and will forward notification of any Penalty Point(s) to the Offending Player on the receipt of this Code of Behaviour Report.
Code of Behaviour 'Standard Code of Behaviour Violations' are non-appealable.
When THREE Penalty Points are reached, the Offending Player will receive a ONE Month Suspension (Penalty suspended for TWELVE months) from all tournament play in Australia, along with 15% reduction in total Australian Ranking's Points.  If the Player accrues a further THREE Penalty Points, the ONE month suspension from all tournament play in Australia will be activated.  The Offending Player will also receive a further 15% reduction in total Australian Ranking's Points.`,
            columnSpan: 10,
            type: SectionType.Label,
            excludeFromWebSite: true,
            extra : {
                height: 159,
                rowSpan: 1,
                alignmentVertical: 'top',
                alignmentHorizontal: 'left',
                fontSize: 10,
            }
        },
    ],
    excludeFromWebSite: true,
},
{
    name: "Referee/Match Supervisor Signature",
    type: SectionType.Section,
    children: [
    {
        name: "Date",
        type: SectionType.DatePicker,
        value: moment(),
        controlOptions: {maxDate:moment()},
        columnSpan: 4,
    },
    {
        name: "Signature",
        type: SectionType.Input,
        columnSpan: 6,
    },
    ]
},
];
