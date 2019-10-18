import { Section } from './section';
import { SectionType } from './SectionType';

export const stepType: string [] = [
    'Code violation',
    'Point penalty',
    'Match default',
    'Immediate default',
    'Post match and on site',
];

export const certificationType: string [] = [
    'Referee',
    'Match Supervisor',
    'Court Supervisor',
    'Chair Umpire',
    'Adjudicator',
    'Authorised Club Official',
];

export const setNumber: string [] = [
    '1',
    '2',
    '3',
    'TB',
    '4',
    '5',
];

export const itemType: string [] = [
    'Section',
    'Input',
    'Dropdown',
];

export const violationTypes: string [] = [
    'Commencement of play ("no show")',
    'Physical abuse',
    'Verbal abuse',
    'Audible obscenity',
    'Visible obscenity',
    'Abuse of racquets or equipment',
    'Abuse of balls',
    'Unsportsmanlike conduct',
    'Line Calling',
    'Unreasonable delays',
    'Leaving the court',
    'Best efforts',
    'Coaching',
    'Failure to complete a match',
    'Spectator Interference',
    'Dress and equipment',
    'Conduct unbecoming',
    'Time violation',
    'Late withdrawal from tournament',
    'Playing two tournaments',
    'Social Media',
    'Straw that broke the camels back',
];

export const parts = {
    'MATCH DETAILS': [
        'Player Name',
        'Club',
        'League',
        'Location',
        'Teams',
        'Round#',
        'Date',
        'Players involved in the match/incident',
        ],
    'OFFENCE DETAILS': [
        'Code',
        'Step',
        'Set',
        'Game Score',
        'Points',
        'Comments regarding the violation',
        ],
    'REFEREE SUPERVISOR DETAILS': [
        'Name',
        'Certification',
        ],
    'WITNESS NAME (IF APPLICABLE)': [
        'Name',
        'Phone',
        ]
};

export const violationTypeFullDescriptions = {
'Commencement of play ("no show")': `A player is not ready to commence play within 15 minutes of his/her match being called.
The referee shall designate the official timepiece. This can also be deemed a "no show".`,

'Physical abuse': `(a) A player physically abuses any official, opponent, spectator, or other person within the
precinct. For the purposes of this rule physical abuse is the unauthorised touching of
an official, opponent, and spectator or other person.
(b) In certain circumstances the matter may also be referred to the police for further
investigation and subsequent possible action.`,

'Verbal abuse': `Players shall not at any time directly or indirectly verbally abuse any official, opponent,
sponsor, spectator, or other person within the precincts of the tournament/competition
site. For the purpose of this rule, verbal abuse is defined as a statement about an official,
opponent, sponsor, spectator or other person that implies dishonesty or is derogatory,
insulting, racially or otherwise abusive.`,

'Audible obscenity': `Players  shall  not  use  an  audible  obscenity  within  the  precincts  of  the
tournament/competition site. For the purposes of this rule audible obscenity is defined as
the use of words commonly known and understood to be profane and uttered clearly and
loudly enough to be heard by the court officials or spectators.`,

'Visible obscenity': `A player makes offensive or obscene gestures during any match or within the precinct. For
the purposes of this rule, visible obscenity is defined as the making of signs by a player with
his hands, body and/or racquet/balls that commonly have an obscene meaning.`,

'Abuse of racquets or equipment': `A player violently or with anger, hits, kicks or throws a racquet or other equipment, or in any
way unreasonably interferes with any court fixtures and equipment within the precinct. For
the purposes of this rule abuse of racquets or equipment is defined as intentionally and
violently throwing, destroying or damaging racquets or equipment or intentionally and
violently hitting the net, court, umpire's chair or other fixture during or after a match out of
anger or frustration.`,

'Abuse of balls': `(a) Players shall not violently, dangerously or with anger hit, kick or throw a tennis ball
within the precinct except in the reasonable pursuit of a point during a match
(including warm-up).
(b) For the purposes of this rule abuse of balls is defined as intentionally hitting a ball out
of the enclosure of the court, hitting a ball dangerously or recklessly within the court or
hitting a ball with negligent disregard of the consequences.`,

'Unsportsmanlike conduct': `(a) A player shall not during any tournament/competition engage in conduct that
damages the image and integrity of tennis. Players shall at all times conduct themselves
in a sportsmanlike manner and give due regard to the authority of officials and the
rights of opponents, spectators and others. For the purposes of this policy,
unsportsmanlike conduct is defined as any misconduct by a player, prior to, during or
subsequent to a match that is clearly abusive or detrimental to the sport, including, but
not limited to blatant cheating, but does not specifically fall within other violation
categories.
(b) Without limiting the foregoing any conduct that is disrespectful or offensive to a
players opponent/s, or to Officials, Tournament Directors or competition managers,
tournament staff, spectators or players on other courts is deemed to be
Unsportsmanlike Conduct under this section 2. This may include failure to return the
ball appropriately to the server, inappropriate or unsportsmanlike comments or
gestures (on court or on-site at a Tournament or within the precinct), sledging,
intimidating, threatening or abusive acts or omissions([whether verbal, in writing or
otherwise}, overt celebrations consistently directed at opponents, excessive noise
disrupting the Tournament Precinct, or any other unsportsmanlike acts or omissions
that are inconsistent with commonly understood tennis etiquette.`,

'Line Calling': `Where a player has a point awarded to their opponent due to an incorrect line call by that
player on a non-clay court (in accordance with Rules for Matches Played without a Chair
Umpire) a Code Violation may be applied at the discretion of the relevant Official in addition
to the loss of the point. Where a player is consistently making incorrect calls on a clay court
resulting in numerous ball mark inspections a Code Violation may be imposed (in addition
to the loss of a point) at the discretion of the relevant Official. Additionally where a player is
constantly showing the incorrect ball mark in order to justify line calls a Code Violation may
also be applied at the discretion of the relevant Official. Any of the line calling situations
described above that attract a Code Violation will be deemed to be Unsportsmanlike
Conduct under this section 2.`,

'Unreasonable delays': `A player unreasonably delays a match. A player shall commence the match after the
expiration of the established warm-up period. Thereafter, play shall be continuous as
provided in the Rules of Tennis and a player shall not unreasonably delay a match for any
cause. When a violation is a result of a medical condition, refusal to play or not returning to
the court within the allocated time a code violation (delay of game) penalty shall be assessed
in accordance with the code schedule. Other delays may be dealt with as a time violation.`,

'Leaving the court': `A player leaves the court area during a match (including the warm-up) without the
permission of an official.`,

'Best efforts': `(a) A player shall use his/her best efforts to win a match when competing in a
tournament/competition.
(b) For the purposes of this rule, the referee shall have the authority to penalise a player in
accordance with the Code of Behaviour.`,

'Coaching': `A player receives any type of coaching from any person while a match is in progress, except
where special provision is made for a tournament/competition. Communication of any kind,
audible or visible between a player and any other person may be construed as coaching.
Coaching shall be permitted where there is an off-court break between sets or during
interruptions to play caused by bad weather or light where players leave the court. Coaching
is not permitted while a court is being serviced at the end of or during a set and players are
still on court, or during a toilet break.`,

'Failure to complete a match': `A player must complete a match in progress or a tournament until his/her elimination from
all entered events unless he/she is reasonably unable to do so. A violation of this section
may subject a player to immediate default.`,

'Spectator Interference': `(a) A player is deemed to be responsible for the behaviour and conduct of their entourage
and support team who attend their matches or attend a Tournament in which they are
participating (i.e. parent, family member, coach, trainer or friend).
(b) Where a match is disrupted or interfered with by the action/s of a spectator who is part
of a player's entourage (i.e. parent, family member, coach, trainer or friend) the relevant
Official may at first instance attempt to address and eliminate any spectator
interference at Tournaments/Competitions by discussing the relevant offences or
behaviour with the offending person and/or applicable player. This discussion may
include a warning to the player and the interfering spectator that any further
interference by the spectator may result in:
(i)  The match being suspended until the Official determines that the issue is resolved
and that play can continue without further disruption or interference;
(ii) A Code Violation being issued in accordance with the provisions below; and/or the
ATO  [at  a  later  date]  refusing  the  player's  entry  into  future
tournaments/competitions pursuant to the procedure set out below.
(c) However, notwithstanding the above, where matches are disrupted or interfered with
by the actions of a spectator who is part of a player's entourage (i.e. parent, family
member, coach or friend) the Official may also decide in their discretion to, and without
having first issued a warning, to impose Code Violation(s) on the relevant player(s)
whose entourage that spectator forms part of, in accordance with the standard Code
Violation process.
(d) Disruption/Interference is defined as including the following:
(i)  Intimidation threatening or abuse of opponents;
(ii) Making or causing to be made disrespectful or inappropriate comments or
gestures towards Officials, players, Tournament Directors/Staff, competition
managers, coaches, other parents and other persons on-site at or involved with a
Tournament at a Precinct;
(iii) Providing inappropriate instructions , comments or direction to a player including
both the spectators own player or the opponent , of any type (although this may
also be considered as “Coaching” in accordance with section 2.13 above) ; and
(iv) Any other inappropriate or Unsportsmanlike Conduct (as defined in section 2
above) of any type as determined by the applicable Official.
(e) The Official may also choose to suspend the match until the relevant disruption or
interference, or the situation giving rise to that disruption or interference has improved
or dissipated sufficiently so as to allow for the match to continue without disruption or
interference.`,

'Dress and equipment': `A player does not dress and present himself/herself for play in approved tennis attire (see
Tennis Australia Dress Regulations). Clean and customarily acceptable attire shall be worn
at all times during match play. A player must be given the opportunity to change his/her
clothing in order to comply with the dress regulations particularly before a match starts. At
the discretion of the relevant official a maximum period of 10 minutes may be allowed in
order for a player to change attire. A direction to improve the player's dress before the next
tournament/competition day may also be given by the relevant official. Players should not
be defaulted from matches due to clothing breaches except in exceptional circumstances
but failure to meet dress regulation requests may be reported to TA or the relevant MA via
an on-site code violation after the completion of the match.`,

'Conduct unbecoming': `A player who behaves in a manner considered to be detrimental to the best interests of the
event and the sport will be deemed to have committed a violation. For the purpose of this
rule, a violation may occur at, or away from, the precinct e.g. at a place of accommodation.
A relevant report will be provided to the Australian Tennis Organisation with a view to
possible referral to a tribunal.`,

'Time violation': `(a) Where a player takes longer than the prescribed time between points, or at the change
of ends, the official will determine whether a violation has occurred. If it is determined
that a violation has occurred the first violation shall be penalised by a warning and each
subsequent violation by a point penalty.
(b) Notwithstanding the previous paragraph, when a time violation is a result of natural loss
of physical condition, injury or refusal to play after being ordered to play by an official a
penalty will be assessed in accordance with the code violation – unreasonable delays.`,

'Late withdrawal from tournament': `Where a player withdraws from a tournament/competition after the advertised withdrawal
date, it shall be considered a late withdrawal.
An athlete's first three (3) late withdrawal offences within a calendar year are excused,
provided the withdrawal is received by the Tournament Referee or Tournament Director
(email, fax or post – but not SMS) prior to the start of the relevant first match for that athlete
at the tournament.
An athlete will be issued one disciplinary point when a player has incurred their fourth late
withdrawal in a calendar year.`,

'Playing two tournaments': `A player is prohibited from playing two tournaments at the same time except with the
specific permission of Tennis Australia/MA or in accordance with the Australian Ranking
Tournament regulations.`,

'Social Media': `Players are advised that the criticism or other derogatory comments regarding
tournaments, administrators, officials, other players, coaches and other stakeholders on
social media may be deemed a breach of the Tennis Australia Social Media Policy. Where
there is any inconsistency between this Code and the Other TA Policies, those Other TA
Policies shall prevail to the extent of such inconsistency.`,

'Straw that broke the camels back': `In these cases, the act that actually precipitated a code being issued might not in itself have warranted a code but a referee feels the Code needs to be finally utilised as a player continues to push boundaries.`,
};

export const violationTypeHints = {
'Commencement of play ("no show")': `- Indicate the time at which the match was originally scheduled and if there was any delays
leading up the match that could have contributed to the player’s non- appearance e.g..
weather, draw changes
- Indicate when the players match was called
- Indicate what efforts were made to locate the player
- Indicate the time at which the default was awarded
- Indicate if a Followed By schedule was in play, or simply a schedule indicating times for each
match.
- Indicate if all other matches in that same time slot had been called/sent to court
- Indicate if the player subsequently made any contact with the event/referee/TD to offer any
excuse AND if the excuse was accepted or not`,

'Physical abuse': ``,

'Verbal abuse': `- Any lead up to the incident?
- Report the EXACT words that were used.
Note: verbal abuse does not have to include a swear word
VA can imply dishonesty, racism, or be demeaning, insulting or derogatory.
- Describe the emotion involved - anger, rage, frustration, retaliation.
- Were they directed at the person for whom the abuse was intended? And possibly if there was
any reaction.
- Describe how the assault made you feel.
- Was the personal space of the person abused invaded by the abuser. `,

'Audible obscenity': `- What happened immediately before the incident?
- What exact words were heard?
- Were the words English or in another language?
(Note: report the obscene word within a phrase even if the entire phrase cannot be repeated
verbatim).
(Note: if in a language other than English, include what you believe a true translation of the
words or phrase would be, or commonly be understood to be)
- How loud was the obscenity?
- In your opinion, who else would have been able to hear the obscenity?
- How far from the court were you when you heard the obscenity?
Note: if a player claims that he/she was heard incorrectly, you should record what it was that
the player claimed to have shouted. `,

'Visible obscenity': `- Describe the exact action that was deemed to be obscene e.g.. Use of hand, racquet?
- Was it directed AT anyone?
- Do you feel that anyone other than yourself would have seen the obscenity (perhaps even if
there was any indication that offence was taken by the witnesses).`,

'Abuse of racquets or equipment':
`- What happened immediately prior to the incident?
- What was the exact action? Under-armed, over-armed, knifed? Slammed into the court from
shoulder height? In anger, frustration? Violent? Intentional?
- Did the racquet leave the hand of the offender?
- If thrown, how far both in the air and along the ground?
E.g. the player whilst standing on the service line, angrily threw his racquet with an overarm
knifing action into the back fence at his end on the full, with the racquet travelling approx. 40
feet through the air. No one was endangered by the action but the frame visibly distorted
upon hitting the fence
- Was anyone endangered?
- If the racquet was hit into an object e.g. net, player chair, fence, umpires chair, what was the
object? How many times? Was their permanent damage to the object that was hit?
- Was the racquet permanently damaged/distorted/deformed?`,

'Abuse of balls': `-  How was the ball hit? In anger, frustration? Hit, kicked, or thrown?
-  What occurred immediately before the incident?
-  Where was the offender standing at the time?
-  Did the offender act as a direct response to some trigger, or did the player appear to have the
opportunity not to act, but then still choose to do so?
-  Was the ball hit out of the court enclosure deliberately? How far did it travel?
-  If the ball remained in the court enclosure, was it hit aerially or along the ground?
-  Was the action reckless? Did the player seem to pre-consider the consequences of the action?
-  Was anyone endangered by the action? Opponent, spectators, officials, ball kids.`,

'Unsportsmanlike conduct': `- Describe the incident specifics (most likely details of the lead up will be required)
Note: UnC is as a rule a little out of the ordinary and so specific details are required `,

'Line Calling': ``,
'Unreasonable delays': ``,

'Leaving the court': `- Make sure all details leading up to the code are clearly outlined
- Make sure the excuse offered by the offending player is documented and why this excuse was
not accepted. `,

'Best efforts': ``,

'Coaching': `- Describe the exact nature of the coaching witnessed i.e. signal, verbal and what you felt the
instruction was intended to indicate if this is not self-evident.
- Confirm that, in your opinion, the coaching was likely to have been received and understood
- Indicate if you witnessed the coaching on more than one occasion i.e. you looked for a repeat
action to convince yourself coaching was occurring, or if the action was so clear that you were
left in no doubt upon witnessing the action on the first occasion.
- Indicate if any approach was made to the person outside the court coaching asking them to
stop, or be careful prior to the code being issued. `,

'Failure to complete a match': ``,
'Spectator Interference': ``,
'Dress and equipment': ``,
'Conduct unbecoming': ``,
'Time violation': ``,

'Late withdrawal from tournament': `- Indicate when the withdrawal occurred and the reason offered
- Indicate if substantiating documentation was requested
- As the code is being issued(noting the referee has the option to not issue a LW code), indicate
why the reason offered is being deemed as ‘non valid”
- Use the ‘follow up’ function in TP and confirm if requested documentation is subsequently
provided by the player.`,

'Playing two tournaments': ``,
'Social Media': ``,
'Straw that broke the camels back': `- List sequentially all borderline actions that resulted in either the heightened awareness of
officials or soft warnings/90sec diplomacy
- Describe the action that occurred just before the code
- BUT CLEARLY INDICATE THAT
“this action in itself did not in isolation necessitate a code being issued, rather this code was
born of a series of borderline breaches and thus this could be seen as a ‘cumulative’ action”, or
words to that effect.`,
};
