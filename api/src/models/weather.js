module.exports = function (sequelize, DataTypes) {
  const Weather = sequelize.define('Weather',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      fecha: {
        type: DataTypes.DATE
      },
      indicativo: {
        type: DataTypes.STRING
      },
      nombre: {
        type: DataTypes.STRING
      },
      provincia: {
        type: DataTypes.STRING
      },
      altitud: {
        type: DataTypes.INTEGER
      },
      tmed: {
        type: DataTypes.DECIMAL
      },
      prec: {
        type: DataTypes.STRING
      },
      tmin: {
        type: DataTypes.DECIMAL
      },
      tmax: {
        type: DataTypes.DECIMAL
      },
      dir: {
        type: DataTypes.INTEGER
      },
      velmedia: {
        type: DataTypes.DECIMAL
      },
      racha: {
        type: DataTypes.DECIMAL
      },
      sol: {
        type: DataTypes.DECIMAL
      },
      presMax: {
        type: DataTypes.DECIMAL
      },
      presMin: {
        type: DataTypes.DECIMAL
      },
      hrMedia: {
        type: DataTypes.INTEGER
      },
      hrMax: {
        type: DataTypes.INTEGER
      },
      hrMin: {
        type: DataTypes.INTEGER
      },
      createdAt: {
        type: DataTypes.DATE
      },
      updatedAt: {
        type: DataTypes.DATE
      },
      deletedAt: {
        type: DataTypes.DATE
      }
    }, {
      sequelize,
      tableName: 'weathers',
      timestamps: true,
      paranoid: true,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [
            { name: 'id' }
          ]
        }
      ]
    }
  )

  Weather.associate = function (models) {

  }

  return Weather
}
