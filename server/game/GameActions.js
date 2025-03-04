const ArchiveAction = require('./GameActions/ArchiveAction');
const AttachAction = require('./GameActions/AttachAction');
const CaptureAction = require('./GameActions/CaptureAction');
const ChangeEventAction = require('./GameActions/ChangeEventAction');
const ChooseGameAction = require('./GameActions/ChooseGameAction');
const ChosenDiscardAction = require('./GameActions/ChosenDiscardAction');
const DealDamageAction = require('./GameActions/DealDamageAction');
const DeckSearchAction = require('./GameActions/DeckSearchAction');
const DelayedEffectAction = require('./GameActions/DelayedEffectAction');
const DestroyAction = require('./GameActions/DestroyAction');
const DiscardCardAction = require('./GameActions/DiscardCardAction');
const DrawAction = require('./GameActions/DrawAction');
const ExhaustAction = require('./GameActions/ExhaustAction');
const FightGameAction = require('./GameActions/FightGameAction');
const ForgeAction = require('./GameActions/ForgeAction');
const HealAction = require('./GameActions/HealAction');
const JointGameAction = require('./GameActions/JointGameAction');
const LastingEffectAction = require('./GameActions/LastingEffectAction');
const LastingEffectCardAction = require('./GameActions/LastingEffectCardAction');
const LoseAmberAction = require('./GameActions/LoseAmberAction');
const ModifyAmberAction = require('./GameActions/ModifyAmberAction');
const ModifyChainsActions = require('./GameActions/ModifyChainsAction');
const MoveCardAction = require('./GameActions/MoveCardAction');
const MoveToFlankAction = require('./GameActions/MoveToFlankAction');
const AddTokenAction = require('./GameActions/AddTokenAction');
const PlaceUnderAction = require('./GameActions/PlaceUnderAction');
const PlayCardAction = require('./GameActions/PlayCardAction');
const PurgeAction = require('./GameActions/PurgeAction');
const PutIntoPlayAction = require('./GameActions/PutIntoPlayAction');
const RandomArchiveAction = require('./GameActions/RandomArchiveAction');
const RandomDiscardAction = require('./GameActions/RandomDiscardAction');
const ReadyAction = require('./GameActions/ReadyAction');
const RemoveStunAction = require('./GameActions/RemoveStunAction');
const RemoveTokenAction = require('./GameActions/RemoveTokenAction');
const ResolveAbilityAction = require('./GameActions/ResolveAbilityAction');
const ResolveFightAction = require('./GameActions/ResolveFightAction');
const ReturnAmberAction = require('./GameActions/ReturnAmber');
const ReturnToDeckAction = require('./GameActions/ReturnToDeckAction');
const ReturnToHandAction = require('./GameActions/ReturnToHandAction');
const RevealAction = require('./GameActions/RevealAction');
const SearchAction = require('./GameActions/SearchAction');
const SequentialAction = require('./GameActions/SequentialAction');
const SequentialForEachAction = require('./GameActions/SequentialForEachAction');
const StealAction = require('./GameActions/StealAction');
const StunAction = require('./GameActions/StunAction');
const SwapAction = require('./GameActions/SwapAction');
const UnforgeAction = require('./GameActions/UnforgeAction');
const UseAction = require('./GameActions/UseAction');

const Actions = {
    // card actions
    addPowerCounter: (propertyFactory) => new AddTokenAction(propertyFactory),
    addDoomCounter: (propertyFactory) => new AddTokenAction(propertyFactory, 'doom'),
    archive: (propertyFactory) => new ArchiveAction(propertyFactory),
    attach: (propertyFactory) => new AttachAction(propertyFactory), // upgrade
    capture: (propertyFactory) => new CaptureAction(propertyFactory),
    cardLastingEffect: (propertyFactory) => new LastingEffectCardAction(propertyFactory), // duration = 'untilEndOfConflict', effect, targetLocation, condition, until
    dealDamage: (propertyFactory) => new DealDamageAction(propertyFactory),
    deckSearch: (propertyFactory) => new DeckSearchAction(propertyFactory), // amount = -1, reveal = true, cardCondition = (card, context) => true
    delayedEffect: (propertyFactory) => new DelayedEffectAction(propertyFactory), // when, message, gameAction, handler
    discard: (propertyFactory) => new DiscardCardAction(propertyFactory),
    destroy: (propertyFactory) => new DestroyAction(propertyFactory),
    exhaust: (propertyFactory) => new ExhaustAction(propertyFactory),
    fight: (propertyFactory) => new FightGameAction(propertyFactory),
    heal: (propertyFactory) => new HealAction(propertyFactory),
    moveCard: (propertyFactory) => new MoveCardAction(propertyFactory), // destination, switch = false, shuffle = false
    moveToFlank: (propertyFactory) => new MoveToFlankAction(propertyFactory),
    placeAmber: (propertyFactory) => new AddTokenAction(propertyFactory, 'amber'), // amount = 1
    placeUnder: (propertyFactory) => new PlaceUnderAction(propertyFactory), // parent
    playCard: (propertyFactory) => new PlayCardAction(propertyFactory), // resetOnCancel = false, postHandler
    purge: (propertyFactory) => new PurgeAction(propertyFactory),
    putIntoPlay: (propertyFactory) => new PutIntoPlayAction(propertyFactory),
    ready: (propertyFactory) => new ReadyAction(propertyFactory),
    removeAmber: (propertyFactory) => new RemoveTokenAction(propertyFactory, 'amber'),
    removePowerCounter: (propertyFactory) => new RemoveTokenAction(propertyFactory),
    removeStun: (propertyFactory) => new RemoveStunAction(propertyFactory),
    resolveAbility: (propertyFactory) => new ResolveAbilityAction(propertyFactory), // ability
    resolveFight: (propertyFactory) => new ResolveFightAction(propertyFactory), // this shouldn't normally be needed
    returnAmber: (propertyFactory) => new ReturnAmberAction(propertyFactory),
    returnToDeck: (propertyFactory) => new ReturnToDeckAction(propertyFactory), // bottom = false
    returnToHand: (propertyFactory) => new ReturnToHandAction(propertyFactory),
    reveal: (propertyFactory) => new RevealAction(propertyFactory),
    sacrifice: (propertyFactory) => new DestroyAction(propertyFactory, true),
    stun: (propertyFactory) => new StunAction(propertyFactory),
    swap: (propertyFactory) => new SwapAction(propertyFactory), // origin
    use: (propertyFactory) => new UseAction(propertyFactory),
    // player actions
    archiveAtRandom: (propertyFactory) => new RandomArchiveAction(propertyFactory), // amount = 1
    chosenDiscard: (propertyFactory) => new ChosenDiscardAction(propertyFactory), // amount = 1
    discardAtRandom: (propertyFactory) => new RandomDiscardAction(propertyFactory), // amount = 1
    draw: (propertyFactory) => new DrawAction(propertyFactory), // amount = 1
    forgeKey: (propertyFactory) => new ForgeAction(propertyFactory), // modifier = 0
    forRemainderOfTurn: (propertyFactory) => new LastingEffectAction(propertyFactory, 1),
    untilNextTurn: (propertyFactory) => new LastingEffectAction(propertyFactory, 2),
    gainAmber: (propertyFactory) => new ModifyAmberAction(propertyFactory), // amount = 1
    gainChains: (propertyFactory) => new ModifyChainsActions(propertyFactory), // amount = 1
    lastingEffect: (propertyFactory) => new LastingEffectAction(propertyFactory),
    loseAmber: (propertyFactory) => new LoseAmberAction(propertyFactory),
    search: (propertyFactory) => new SearchAction(propertyFactory), // name
    steal: (propertyFactory) => new StealAction(propertyFactory), // amount = 1
    unforgeKey: (propertyFactory) => new UnforgeAction(propertyFactory),
    // meta actions
    changeEvent: (propertyFactory) => new ChangeEventAction(propertyFactory),
    chooseAction: (propertyFactory) => new ChooseGameAction(propertyFactory), // choices, activePromptTitle = 'Select one'
    jointAction: (gameActions) => new JointGameAction(gameActions), // takes an array of gameActions, not a propertyFactory
    sequential: (gameActions) => new SequentialAction(gameActions), // takes an array of gameActions, not a propertyFactory
    sequentialForEach: (propertyFactory) => new SequentialForEachAction(propertyFactory)
};

module.exports = Actions;
