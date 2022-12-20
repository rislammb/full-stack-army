const Poll = require('./PollModel');

exports.pollGetController = (_req, res) => {
  res.render('create');
};

exports.pollPostController = async (req, res) => {
  const { title, description, options } = req.body;
  const modifyedOptions = options
    .filter((opt) => opt && opt)
    .map((opt) => ({ name: opt, vote: 0 }));

  const poll = new Poll({
    title,
    description,
    options: modifyedOptions,
  });

  try {
    await poll.save();
    res.redirect('/polls');
  } catch (error) {
    console.log(error);
    res.render('create');
  }
};

exports.getAllPolls = async (_req, res) => {
  try {
    const polls = await Poll.find();
    res.render('polls', { polls });
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }
};

exports.getSinglePoll = async (req, res) => {
  const { pollId } = req.params;
  if (!pollId.includes('.css')) {
    try {
      const poll = await Poll.findById(pollId);
      const options = [...poll.options];

      const result = [];
      options.forEach((opt) => {
        const percentage = (opt.vote * 100) / poll.totalVote;
        result.push({
          ...opt._doc,
          percentage: percentage ? percentage.toFixed(1) : 0,
        });
      });

      res.render('details', { poll, result });
    } catch (error) {
      console.log(error);
      res.redirect('/polls');
    }
  } else res.sendFile(__dirname + `/views/${pollId}`);
};

exports.postSinglePoll = async (req, res) => {
  const { pollId } = req.params;
  const optionId = req.body.option;
  try {
    const poll = await Poll.findById(pollId);
    const options = [...poll.options];
    const index = options.findIndex((opt) => opt.id === optionId);
    options[index].vote++;
    const totalVote = poll.totalVote + 1;

    await Poll.findByIdAndUpdate(pollId, { totalVote, options });
    res.redirect('/polls/' + pollId);
  } catch (error) {
    console.log(error);
    res.redirect('/polls/' + pollId);
  }
};

exports.deletePoll = async (req, res) => {
  const { pollId } = req.params;
  try {
    await Poll.findByIdAndDelete(pollId);
    res.redirect('/polls');
  } catch (error) {
    console.log(error);
    res.redirect('/polls/' + pollId);
  }
};
