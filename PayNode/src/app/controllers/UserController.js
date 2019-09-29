import User from '../models/User';

class UserController {
  async store(req, res) {
    const userExiste = await User.findOne({
      where: { email: req.body.email },
    });
    if (userExiste) {
      res.status(401).json({ erro: 'ja existe usuario' });
    }
    const user = await User.create(req.body);
    return res.json(user);
  }

  async update(req, res) {
    const { email, oldPassword } = req.body;
    const user = await User.findByPk(req.userId);

    if (email !== user.email) {
      const userExiste = await User.findOne({
        where: { email },
      });
      if (userExiste) {
        res.status(401).json({ erro: 'ja existe usuario' });
      }
    }
    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      res.status(401).json({ erro: 'PassWord errado' });
    }

    const { id, nome, telefone } = await user.update(req.body);

    return res.json({
      user: {
        id,
        nome,
        email,
        telefone,
      },
    });
  }
}

export default new UserController();
