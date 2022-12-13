const Poll = require('./PollModel');

exports.pollGetController = (_req, res) => {
  res.render('create');
};

exports.pollPostController = async (req, res) => {
  const { title, description, options } = req.body;
  const modifyedOptions = options.map((opt) => opt && { name: opt, vote: 0 });

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
  }
};

exports.getAllPolls = async (_req, res) => {
  try {
    const polls = await Poll.find();
    res.render('polls', { polls });
  } catch (error) {
    console.log(error);
  }
};

exports.getSinglePoll = async (req, res) => {
  const { pollId } = req.params;
  try {
    const poll = await Poll.findById(pollId);
    const options = [...poll.options];

    const result = [];
    options.forEach((opt) => {
      const percentage = (opt.vote * 100) / poll.totalVote;
      result.push({
        ...opt._doc,
        percentage: percentage ? percentage.toFixed(2) : 0,
      });
    });

    res.render('details', { poll, result });
  } catch (error) {
    console.log(error);
  }
};
