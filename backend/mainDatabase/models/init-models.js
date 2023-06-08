var DataTypes = require("sequelize").DataTypes;
var _ATL_HK_TM_Type = require("./ATL_HK_TM_Type");
var _ATL_HK_TM_Type_temperatures = require("./ATL_HK_TM_Type_temperatures");
var _ATL_HK_TM_Type_temperatures_indexes = require("./ATL_HK_TM_Type_temperatures_indexes");
var _ATL_SC_TM_Type = require("./ATL_SC_TM_Type");
var _ATL_SC_TM_Type_photodiodes = require("./ATL_SC_TM_Type_photodiodes");
var _ATL_SC_TM_Type_photodiodes_indexes = require("./ATL_SC_TM_Type_photodiodes_indexes");
var _Absolute_Barometer = require("./Absolute_Barometer");
var _Absolute_Time_Type = require("./Absolute_Time_Type");
var _Actuator_Control_Mode = require("./Actuator_Control_Mode");
var _Analogue_Raw_Data = require("./Analogue_Raw_Data");
var _Att_Lab_Data = require("./Att_Lab_Data");
var _Att_Lab_Data_Measurements = require("./Att_Lab_Data_Measurements");
var _Att_Lab_Data_Measurements_photodiodes = require("./Att_Lab_Data_Measurements_photodiodes");
var _Att_Lab_Data_Measurements_photodiodes_indexes = require("./Att_Lab_Data_Measurements_photodiodes_indexes");
var _Att_Lab_Data_Measurements_thermistors = require("./Att_Lab_Data_Measurements_thermistors");
var _Att_Lab_Data_Measurements_thermistors_indexes = require("./Att_Lab_Data_Measurements_thermistors_indexes");
var _Att_Lab_Mode = require("./Att_Lab_Mode");
var _Axis_Data = require("./Axis_Data");
var _Balloon_Events = require("./Balloon_Events");
var _Balloon_Mode = require("./Balloon_Mode");
var _Boolean_Type = require("./Boolean_Type");
var _CHARSTR_VARIABLE_LEN = require("./CHARSTR_VARIABLE_LEN");
var _DP_Data = require("./DP_Data");
var _Dummy_Type = require("./Dummy_Type");
var _Duty_Cycle_Type = require("./Duty_Cycle_Type");
var _EL_HK_TM_Type = require("./EL_HK_TM_Type");
var _EL_SC_TM_Type = require("./EL_SC_TM_Type");
var _EL_SC_TM_Type_dif_barometers = require("./EL_SC_TM_Type_dif_barometers");
var _EL_SC_TM_Type_dif_barometers_indexes = require("./EL_SC_TM_Type_dif_barometers_indexes");
var _EnvLab_Data = require("./EnvLab_Data");
var _EnvLab_Data_payload = require("./EnvLab_Data_payload");
var _EnvLab_Experiment_Data = require("./EnvLab_Experiment_Data");
var _EnvLab_Experiment_Data_Sensors = require("./EnvLab_Experiment_Data_Sensors");
var _EnvLab_Heater_ID = require("./EnvLab_Heater_ID");
var _EnvLab_Pressure_Data = require("./EnvLab_Pressure_Data");
var _EnvLab_Pressure_Data_abs_barometers = require("./EnvLab_Pressure_Data_abs_barometers");
var _EnvLab_Pressure_Data_abs_barometers_indexes = require("./EnvLab_Pressure_Data_abs_barometers_indexes");
var _EnvLab_Pressure_Data_dif_barometers = require("./EnvLab_Pressure_Data_dif_barometers");
var _EnvLab_Pressure_Data_dif_barometers_indexes = require("./EnvLab_Pressure_Data_dif_barometers_indexes");
var _Env_Lab_Heaters_Mode = require("./Env_Lab_Heaters_Mode");
var _Env_Lab_Mode = require("./Env_Lab_Mode");
var _Env_Lab_Mode_mode = require("./Env_Lab_Mode_mode");
var _Epoch_Type = require("./Epoch_Type");
var _FLOAT32_Type = require("./FLOAT32_Type");
var _FLOAT64_Type = require("./FLOAT64_Type");
var _GPS_Data = require("./GPS_Data");
var _HK_TM_Type = require("./HK_TM_Type");
var _HK_TM_Type_payload = require("./HK_TM_Type_payload");
var _HTL_Data = require("./HTL_Data");
var _HTL_Data_payload = require("./HTL_Data_payload");
var _HTL_Data_payload_heaters = require("./HTL_Data_payload_heaters");
var _HTL_Data_payload_heaters_indexes = require("./HTL_Data_payload_heaters_indexes");
var _HTL_Data_payload_thermistors = require("./HTL_Data_payload_thermistors");
var _HTL_Data_payload_thermistors_indexes = require("./HTL_Data_payload_thermistors_indexes");
var _HTL_Heater_ID = require("./HTL_Heater_ID");
var _HTL_Heaters_Mode = require("./HTL_Heaters_Mode");
var _HTL_Mode = require("./HTL_Mode");
var _HTL_Mode_mode = require("./HTL_Mode_mode");
var _HTL_SC_TM_Type = require("./HTL_SC_TM_Type");
var _HTL_SC_TM_Type_heaters = require("./HTL_SC_TM_Type_heaters");
var _HTL_SC_TM_Type_heaters_indexes = require("./HTL_SC_TM_Type_heaters_indexes");
var _Heater_ID = require("./Heater_ID");
var _Heater_Power_Type = require("./Heater_Power_Type");
var _IMU_AxesConfiguration = require("./IMU_AxesConfiguration");
var _IMU_AxisSelection = require("./IMU_AxisSelection");
var _IMU_AxisSelection_remap = require("./IMU_AxisSelection_remap");
var _IMU_AxisSelection_sign = require("./IMU_AxisSelection_sign");
var _IMU_CalibrationLevel = require("./IMU_CalibrationLevel");
var _IMU_CalibrationOffsets = require("./IMU_CalibrationOffsets");
var _IMU_Calibration_Commands = require("./IMU_Calibration_Commands");
var _IMU_Data = require("./IMU_Data");
var _IMU_Fusion_Data = require("./IMU_Fusion_Data");
var _IMU_OperatingMode = require("./IMU_OperatingMode");
var _IMU_Parameters = require("./IMU_Parameters");
var _IMU_Parameters_calibration_parameters = require("./IMU_Parameters_calibration_parameters");
var _IMU_Parameters_calibration_parameters_calibration_states = require("./IMU_Parameters_calibration_parameters_calibration_states");
var _IMU_Sensors_Data = require("./IMU_Sensors_Data");
var _IMU_Temperatures = require("./IMU_Temperatures");
var _INT16_Type = require("./INT16_Type");
var _INT32_Type = require("./INT32_Type");
var _INT64_Type = require("./INT64_Type");
var _INT8_Type = require("./INT8_Type");
var _NADS_Data = require("./NADS_Data");
var _NADS_Data_payload = require("./NADS_Data_payload");
var _NADS_Mode = require("./NADS_Mode");
var _NADS_SC_TM_Type = require("./NADS_SC_TM_Type");
var _Null_Type = require("./Null_Type");
var _OCTSTR_VARIABLE_LEN = require("./OCTSTR_VARIABLE_LEN");
var _PCU_Data = require("./PCU_Data");
var _PCU_Data_payload = require("./PCU_Data_payload");
var _PCU_Data_payload_sensor_data = require("./PCU_Data_payload_sensor_data");
var _PCU_HK_TM_Type = require("./PCU_HK_TM_Type");
var _PCU_Mode = require("./PCU_Mode");
var _PCU_PS_Lines_Status = require("./PCU_PS_Lines_Status");
var _PID = require("./PID");
var _PID_Range = require("./PID_Range");
var _Power_Supply_Line_ID = require("./Power_Supply_Line_ID");
var _Quaternion_Data = require("./Quaternion_Data");
var _Relative_Time_Type = require("./Relative_Time_Type");
var _Restartable_Device_ID = require("./Restartable_Device_ID");
var _SC_TM_Type = require("./SC_TM_Type");
var _SC_TM_Type_payload = require("./SC_TM_Type_payload");
var _Switch_Status = require("./Switch_Status");
var _TC_Change_Balloon_Mode = require("./TC_Change_Balloon_Mode");
var _TC_Change_TM_Mode = require("./TC_Change_TM_Mode");
var _TC_Control_Experiment_Heater = require("./TC_Control_Experiment_Heater");
var _TC_Restart_Device = require("./TC_Restart_Device");
var _TC_Start_Manual_Control = require("./TC_Start_Manual_Control");
var _TC_Stop_Manual_Control = require("./TC_Stop_Manual_Control");
var _TC_Type = require("./TC_Type");
var _TMTC_Mode = require("./TMTC_Mode");
var _TM_Type = require("./TM_Type");
var _T_Boolean = require("./T_Boolean");
var _T_Int32 = require("./T_Int32");
var _T_Int8 = require("./T_Int8");
var _T_Null_Record = require("./T_Null_Record");
var _T_UInt32 = require("./T_UInt32");
var _T_UInt8 = require("./T_UInt8");
var _TaStE_Calibration_complete_type = require("./TaStE_Calibration_complete_type");
var _UINT16_Type = require("./UINT16_Type");
var _UINT32_Type = require("./UINT32_Type");
var _UINT64_Type = require("./UINT64_Type");
var _UINT8_Type = require("./UINT8_Type");

function initModels(sequelize) {
  var ATL_HK_TM_Type = _ATL_HK_TM_Type(sequelize, DataTypes);
  var ATL_HK_TM_Type_temperatures = _ATL_HK_TM_Type_temperatures(sequelize, DataTypes);
  var ATL_HK_TM_Type_temperatures_indexes = _ATL_HK_TM_Type_temperatures_indexes(sequelize, DataTypes);
  var ATL_SC_TM_Type = _ATL_SC_TM_Type(sequelize, DataTypes);
  var ATL_SC_TM_Type_photodiodes = _ATL_SC_TM_Type_photodiodes(sequelize, DataTypes);
  var ATL_SC_TM_Type_photodiodes_indexes = _ATL_SC_TM_Type_photodiodes_indexes(sequelize, DataTypes);
  var Absolute_Barometer = _Absolute_Barometer(sequelize, DataTypes);
  var Absolute_Time_Type = _Absolute_Time_Type(sequelize, DataTypes);
  var Actuator_Control_Mode = _Actuator_Control_Mode(sequelize, DataTypes);
  var Analogue_Raw_Data = _Analogue_Raw_Data(sequelize, DataTypes);
  var Att_Lab_Data = _Att_Lab_Data(sequelize, DataTypes);
  var Att_Lab_Data_Measurements = _Att_Lab_Data_Measurements(sequelize, DataTypes);
  var Att_Lab_Data_Measurements_photodiodes = _Att_Lab_Data_Measurements_photodiodes(sequelize, DataTypes);
  var Att_Lab_Data_Measurements_photodiodes_indexes = _Att_Lab_Data_Measurements_photodiodes_indexes(sequelize, DataTypes);
  var Att_Lab_Data_Measurements_thermistors = _Att_Lab_Data_Measurements_thermistors(sequelize, DataTypes);
  var Att_Lab_Data_Measurements_thermistors_indexes = _Att_Lab_Data_Measurements_thermistors_indexes(sequelize, DataTypes);
  var Att_Lab_Mode = _Att_Lab_Mode(sequelize, DataTypes);
  var Axis_Data = _Axis_Data(sequelize, DataTypes);
  var Balloon_Events = _Balloon_Events(sequelize, DataTypes);
  var Balloon_Mode = _Balloon_Mode(sequelize, DataTypes);
  var Boolean_Type = _Boolean_Type(sequelize, DataTypes);
  var CHARSTR_VARIABLE_LEN = _CHARSTR_VARIABLE_LEN(sequelize, DataTypes);
  var DP_Data = _DP_Data(sequelize, DataTypes);
  var Dummy_Type = _Dummy_Type(sequelize, DataTypes);
  var Duty_Cycle_Type = _Duty_Cycle_Type(sequelize, DataTypes);
  var EL_HK_TM_Type = _EL_HK_TM_Type(sequelize, DataTypes);
  var EL_SC_TM_Type = _EL_SC_TM_Type(sequelize, DataTypes);
  var EL_SC_TM_Type_dif_barometers = _EL_SC_TM_Type_dif_barometers(sequelize, DataTypes);
  var EL_SC_TM_Type_dif_barometers_indexes = _EL_SC_TM_Type_dif_barometers_indexes(sequelize, DataTypes);
  var EnvLab_Data = _EnvLab_Data(sequelize, DataTypes);
  var EnvLab_Data_payload = _EnvLab_Data_payload(sequelize, DataTypes);
  var EnvLab_Experiment_Data = _EnvLab_Experiment_Data(sequelize, DataTypes);
  var EnvLab_Experiment_Data_Sensors = _EnvLab_Experiment_Data_Sensors(sequelize, DataTypes);
  var EnvLab_Heater_ID = _EnvLab_Heater_ID(sequelize, DataTypes);
  var EnvLab_Pressure_Data = _EnvLab_Pressure_Data(sequelize, DataTypes);
  var EnvLab_Pressure_Data_abs_barometers = _EnvLab_Pressure_Data_abs_barometers(sequelize, DataTypes);
  var EnvLab_Pressure_Data_abs_barometers_indexes = _EnvLab_Pressure_Data_abs_barometers_indexes(sequelize, DataTypes);
  var EnvLab_Pressure_Data_dif_barometers = _EnvLab_Pressure_Data_dif_barometers(sequelize, DataTypes);
  var EnvLab_Pressure_Data_dif_barometers_indexes = _EnvLab_Pressure_Data_dif_barometers_indexes(sequelize, DataTypes);
  var Env_Lab_Heaters_Mode = _Env_Lab_Heaters_Mode(sequelize, DataTypes);
  var Env_Lab_Mode = _Env_Lab_Mode(sequelize, DataTypes);
  var Env_Lab_Mode_mode = _Env_Lab_Mode_mode(sequelize, DataTypes);
  var Epoch_Type = _Epoch_Type(sequelize, DataTypes);
  var FLOAT32_Type = _FLOAT32_Type(sequelize, DataTypes);
  var FLOAT64_Type = _FLOAT64_Type(sequelize, DataTypes);
  var GPS_Data = _GPS_Data(sequelize, DataTypes);
  var HK_TM_Type = _HK_TM_Type(sequelize, DataTypes);
  var HK_TM_Type_payload = _HK_TM_Type_payload(sequelize, DataTypes);
  var HTL_Data = _HTL_Data(sequelize, DataTypes);
  var HTL_Data_payload = _HTL_Data_payload(sequelize, DataTypes);
  var HTL_Data_payload_heaters = _HTL_Data_payload_heaters(sequelize, DataTypes);
  var HTL_Data_payload_heaters_indexes = _HTL_Data_payload_heaters_indexes(sequelize, DataTypes);
  var HTL_Data_payload_thermistors = _HTL_Data_payload_thermistors(sequelize, DataTypes);
  var HTL_Data_payload_thermistors_indexes = _HTL_Data_payload_thermistors_indexes(sequelize, DataTypes);
  var HTL_Heater_ID = _HTL_Heater_ID(sequelize, DataTypes);
  var HTL_Heaters_Mode = _HTL_Heaters_Mode(sequelize, DataTypes);
  var HTL_Mode = _HTL_Mode(sequelize, DataTypes);
  var HTL_Mode_mode = _HTL_Mode_mode(sequelize, DataTypes);
  var HTL_SC_TM_Type = _HTL_SC_TM_Type(sequelize, DataTypes);
  var HTL_SC_TM_Type_heaters = _HTL_SC_TM_Type_heaters(sequelize, DataTypes);
  var HTL_SC_TM_Type_heaters_indexes = _HTL_SC_TM_Type_heaters_indexes(sequelize, DataTypes);
  var Heater_ID = _Heater_ID(sequelize, DataTypes);
  var Heater_Power_Type = _Heater_Power_Type(sequelize, DataTypes);
  var IMU_AxesConfiguration = _IMU_AxesConfiguration(sequelize, DataTypes);
  var IMU_AxisSelection = _IMU_AxisSelection(sequelize, DataTypes);
  var IMU_AxisSelection_remap = _IMU_AxisSelection_remap(sequelize, DataTypes);
  var IMU_AxisSelection_sign = _IMU_AxisSelection_sign(sequelize, DataTypes);
  var IMU_CalibrationLevel = _IMU_CalibrationLevel(sequelize, DataTypes);
  var IMU_CalibrationOffsets = _IMU_CalibrationOffsets(sequelize, DataTypes);
  var IMU_Calibration_Commands = _IMU_Calibration_Commands(sequelize, DataTypes);
  var IMU_Data = _IMU_Data(sequelize, DataTypes);
  var IMU_Fusion_Data = _IMU_Fusion_Data(sequelize, DataTypes);
  var IMU_OperatingMode = _IMU_OperatingMode(sequelize, DataTypes);
  var IMU_Parameters = _IMU_Parameters(sequelize, DataTypes);
  var IMU_Parameters_calibration_parameters = _IMU_Parameters_calibration_parameters(sequelize, DataTypes);
  var IMU_Parameters_calibration_parameters_calibration_states = _IMU_Parameters_calibration_parameters_calibration_states(sequelize, DataTypes);
  var IMU_Sensors_Data = _IMU_Sensors_Data(sequelize, DataTypes);
  var IMU_Temperatures = _IMU_Temperatures(sequelize, DataTypes);
  var INT16_Type = _INT16_Type(sequelize, DataTypes);
  var INT32_Type = _INT32_Type(sequelize, DataTypes);
  var INT64_Type = _INT64_Type(sequelize, DataTypes);
  var INT8_Type = _INT8_Type(sequelize, DataTypes);
  var NADS_Data = _NADS_Data(sequelize, DataTypes);
  var NADS_Data_payload = _NADS_Data_payload(sequelize, DataTypes);
  var NADS_Mode = _NADS_Mode(sequelize, DataTypes);
  var NADS_SC_TM_Type = _NADS_SC_TM_Type(sequelize, DataTypes);
  var Null_Type = _Null_Type(sequelize, DataTypes);
  var OCTSTR_VARIABLE_LEN = _OCTSTR_VARIABLE_LEN(sequelize, DataTypes);
  var PCU_Data = _PCU_Data(sequelize, DataTypes);
  var PCU_Data_payload = _PCU_Data_payload(sequelize, DataTypes);
  var PCU_Data_payload_sensor_data = _PCU_Data_payload_sensor_data(sequelize, DataTypes);
  var PCU_HK_TM_Type = _PCU_HK_TM_Type(sequelize, DataTypes);
  var PCU_Mode = _PCU_Mode(sequelize, DataTypes);
  var PCU_PS_Lines_Status = _PCU_PS_Lines_Status(sequelize, DataTypes);
  var PID = _PID(sequelize, DataTypes);
  var PID_Range = _PID_Range(sequelize, DataTypes);
  var Power_Supply_Line_ID = _Power_Supply_Line_ID(sequelize, DataTypes);
  var Quaternion_Data = _Quaternion_Data(sequelize, DataTypes);
  var Relative_Time_Type = _Relative_Time_Type(sequelize, DataTypes);
  var Restartable_Device_ID = _Restartable_Device_ID(sequelize, DataTypes);
  var SC_TM_Type = _SC_TM_Type(sequelize, DataTypes);
  var SC_TM_Type_payload = _SC_TM_Type_payload(sequelize, DataTypes);
  var Switch_Status = _Switch_Status(sequelize, DataTypes);
  var TC_Change_Balloon_Mode = _TC_Change_Balloon_Mode(sequelize, DataTypes);
  var TC_Change_TM_Mode = _TC_Change_TM_Mode(sequelize, DataTypes);
  var TC_Control_Experiment_Heater = _TC_Control_Experiment_Heater(sequelize, DataTypes);
  var TC_Restart_Device = _TC_Restart_Device(sequelize, DataTypes);
  var TC_Start_Manual_Control = _TC_Start_Manual_Control(sequelize, DataTypes);
  var TC_Stop_Manual_Control = _TC_Stop_Manual_Control(sequelize, DataTypes);
  var TC_Type = _TC_Type(sequelize, DataTypes);
  var TMTC_Mode = _TMTC_Mode(sequelize, DataTypes);
  var TM_Type = _TM_Type(sequelize, DataTypes);
  var T_Boolean = _T_Boolean(sequelize, DataTypes);
  var T_Int32 = _T_Int32(sequelize, DataTypes);
  var T_Int8 = _T_Int8(sequelize, DataTypes);
  var T_Null_Record = _T_Null_Record(sequelize, DataTypes);
  var T_UInt32 = _T_UInt32(sequelize, DataTypes);
  var T_UInt8 = _T_UInt8(sequelize, DataTypes);
  var TaStE_Calibration_complete_type = _TaStE_Calibration_complete_type(sequelize, DataTypes);
  var UINT16_Type = _UINT16_Type(sequelize, DataTypes);
  var UINT32_Type = _UINT32_Type(sequelize, DataTypes);
  var UINT64_Type = _UINT64_Type(sequelize, DataTypes);
  var UINT8_Type = _UINT8_Type(sequelize, DataTypes);

  HK_TM_Type_payload.belongsTo(ATL_HK_TM_Type, { as: "atl_hk", foreignKey: "fk_atl_hk_iid"});
  ATL_HK_TM_Type.hasMany(HK_TM_Type_payload, { as: "HK_TM_Type_payloads", foreignKey: "fk_atl_hk_iid"});
  ATL_HK_TM_Type.belongsTo(ATL_HK_TM_Type_temperatures, { as: "temperatures", foreignKey: "fk_temperatures_iid"});
  ATL_HK_TM_Type_temperatures.hasMany(ATL_HK_TM_Type, { as: "ATL_HK_TM_Types", foreignKey: "fk_temperatures_iid"});
  ATL_HK_TM_Type_temperatures_indexes.belongsTo(ATL_HK_TM_Type_temperatures, { as: "ATL_HK_TM_Type_temperatures", foreignKey: "fk_ATL_HK_TM_Type_temperatures_iid"});
  ATL_HK_TM_Type_temperatures.hasMany(ATL_HK_TM_Type_temperatures_indexes, { as: "ATL_HK_TM_Type_temperatures_indices", foreignKey: "fk_ATL_HK_TM_Type_temperatures_iid"});
  SC_TM_Type_payload.belongsTo(ATL_SC_TM_Type, { as: "atl", foreignKey: "fk_atl_iid"});
  ATL_SC_TM_Type.hasMany(SC_TM_Type_payload, { as: "SC_TM_Type_payloads", foreignKey: "fk_atl_iid"});
  ATL_SC_TM_Type.belongsTo(ATL_SC_TM_Type_photodiodes, { as: "photodiodes", foreignKey: "fk_photodiodes_iid"});
  ATL_SC_TM_Type_photodiodes.hasMany(ATL_SC_TM_Type, { as: "ATL_SC_TM_Types", foreignKey: "fk_photodiodes_iid"});
  ATL_SC_TM_Type_photodiodes_indexes.belongsTo(ATL_SC_TM_Type_photodiodes, { as: "ATL_SC_TM_Type_photodiodes", foreignKey: "fk_ATL_SC_TM_Type_photodiodes_iid"});
  ATL_SC_TM_Type_photodiodes.hasMany(ATL_SC_TM_Type_photodiodes_indexes, { as: "ATL_SC_TM_Type_photodiodes_indices", foreignKey: "fk_ATL_SC_TM_Type_photodiodes_iid"});
  EnvLab_Pressure_Data_abs_barometers_indexes.belongsTo(Absolute_Barometer, { as: "Absolute_Barometer", foreignKey: "fk_Absolute_Barometer_iid"});
  Absolute_Barometer.hasMany(EnvLab_Pressure_Data_abs_barometers_indexes, { as: "EnvLab_Pressure_Data_abs_barometers_indices", foreignKey: "fk_Absolute_Barometer_iid"});
  Att_Lab_Data.belongsTo(Absolute_Time_Type, { as: "snapshot_time", foreignKey: "fk_snapshot_time_iid"});
  Absolute_Time_Type.hasMany(Att_Lab_Data, { as: "Att_Lab_Data", foreignKey: "fk_snapshot_time_iid"});
  EnvLab_Data.belongsTo(Absolute_Time_Type, { as: "snapshot_time", foreignKey: "fk_snapshot_time_iid"});
  Absolute_Time_Type.hasMany(EnvLab_Data, { as: "EnvLab_Data", foreignKey: "fk_snapshot_time_iid"});
  HTL_Data.belongsTo(Absolute_Time_Type, { as: "snapshot_time", foreignKey: "fk_snapshot_time_iid"});
  Absolute_Time_Type.hasMany(HTL_Data, { as: "HTL_Data", foreignKey: "fk_snapshot_time_iid"});
  NADS_Data.belongsTo(Absolute_Time_Type, { as: "snapshot_time", foreignKey: "fk_snapshot_time_iid"});
  Absolute_Time_Type.hasMany(NADS_Data, { as: "NADS_Data", foreignKey: "fk_snapshot_time_iid"});
  PCU_Data.belongsTo(Absolute_Time_Type, { as: "snapshot_time", foreignKey: "fk_snapshot_time_iid"});
  Absolute_Time_Type.hasMany(PCU_Data, { as: "PCU_Data", foreignKey: "fk_snapshot_time_iid"});
  Env_Lab_Heaters_Mode.belongsTo(Actuator_Control_Mode, { as: "upwards", foreignKey: "fk_upwards_iid"});
  Actuator_Control_Mode.hasMany(Env_Lab_Heaters_Mode, { as: "Env_Lab_Heaters_Modes", foreignKey: "fk_upwards_iid"});
  Env_Lab_Heaters_Mode.belongsTo(Actuator_Control_Mode, { as: "downwards", foreignKey: "fk_downwards_iid"});
  Actuator_Control_Mode.hasMany(Env_Lab_Heaters_Mode, { as: "downwards_i_Env_Lab_Heaters_Modes", foreignKey: "fk_downwards_iid"});
  HTL_Heaters_Mode.belongsTo(Actuator_Control_Mode, { as: "experiment_1", foreignKey: "fk_experiment_1_iid"});
  Actuator_Control_Mode.hasMany(HTL_Heaters_Mode, { as: "HTL_Heaters_Modes", foreignKey: "fk_experiment_1_iid"});
  HTL_Heaters_Mode.belongsTo(Actuator_Control_Mode, { as: "experiment_2", foreignKey: "fk_experiment_2_iid"});
  Actuator_Control_Mode.hasMany(HTL_Heaters_Mode, { as: "experiment_2_i_HTL_Heaters_Modes", foreignKey: "fk_experiment_2_iid"});
  HTL_Heaters_Mode.belongsTo(Actuator_Control_Mode, { as: "experiment_3", foreignKey: "fk_experiment_3_iid"});
  Actuator_Control_Mode.hasMany(HTL_Heaters_Mode, { as: "experiment_3_i_HTL_Heaters_Modes", foreignKey: "fk_experiment_3_iid"});
  HTL_Heaters_Mode.belongsTo(Actuator_Control_Mode, { as: "experiment_4", foreignKey: "fk_experiment_4_iid"});
  Actuator_Control_Mode.hasMany(HTL_Heaters_Mode, { as: "experiment_4_i_HTL_Heaters_Modes", foreignKey: "fk_experiment_4_iid"});
  DP_Data.belongsTo(Att_Lab_Data, { as: "atl", foreignKey: "fk_atl_iid"});
  Att_Lab_Data.hasMany(DP_Data, { as: "DP_Data", foreignKey: "fk_atl_iid"});
  Att_Lab_Data.belongsTo(Att_Lab_Data_Measurements, { as: "payload", foreignKey: "fk_payload_iid"});
  Att_Lab_Data_Measurements.hasMany(Att_Lab_Data, { as: "Att_Lab_Data", foreignKey: "fk_payload_iid"});
  Att_Lab_Data_Measurements.belongsTo(Att_Lab_Data_Measurements_photodiodes, { as: "photodiodes", foreignKey: "fk_photodiodes_iid"});
  Att_Lab_Data_Measurements_photodiodes.hasMany(Att_Lab_Data_Measurements, { as: "Att_Lab_Data_Measurements", foreignKey: "fk_photodiodes_iid"});
  Att_Lab_Data_Measurements_photodiodes_indexes.belongsTo(Att_Lab_Data_Measurements_photodiodes, { as: "Att_Lab_Data_Measurements_photodiodes", foreignKey: "fk_Att_Lab_Data_Measurements_photodiodes_iid"});
  Att_Lab_Data_Measurements_photodiodes.hasMany(Att_Lab_Data_Measurements_photodiodes_indexes, { as: "Att_Lab_Data_Measurements_photodiodes_indices", foreignKey: "fk_Att_Lab_Data_Measurements_photodiodes_iid"});
  Att_Lab_Data_Measurements.belongsTo(Att_Lab_Data_Measurements_thermistors, { as: "thermistors", foreignKey: "fk_thermistors_iid"});
  Att_Lab_Data_Measurements_thermistors.hasMany(Att_Lab_Data_Measurements, { as: "Att_Lab_Data_Measurements", foreignKey: "fk_thermistors_iid"});
  Att_Lab_Data_Measurements_thermistors_indexes.belongsTo(Att_Lab_Data_Measurements_thermistors, { as: "Att_Lab_Data_Measurements_thermistors", foreignKey: "fk_Att_Lab_Data_Measurements_thermistors_iid"});
  Att_Lab_Data_Measurements_thermistors.hasMany(Att_Lab_Data_Measurements_thermistors_indexes, { as: "Att_Lab_Data_Measurements_thermistors_indices", foreignKey: "fk_Att_Lab_Data_Measurements_thermistors_iid"});
  Att_Lab_Data.belongsTo(Att_Lab_Mode, { as: "mode", foreignKey: "fk_mode_iid"});
  Att_Lab_Mode.hasMany(Att_Lab_Data, { as: "Att_Lab_Data", foreignKey: "fk_mode_iid"});
  IMU_Fusion_Data.belongsTo(Axis_Data, { as: "euler_orientation", foreignKey: "fk_euler_orientation_iid"});
  Axis_Data.hasMany(IMU_Fusion_Data, { as: "IMU_Fusion_Data", foreignKey: "fk_euler_orientation_iid"});
  IMU_Fusion_Data.belongsTo(Axis_Data, { as: "liner_acceleration", foreignKey: "fk_liner_acceleration_iid"});
  Axis_Data.hasMany(IMU_Fusion_Data, { as: "liner_acceleration_i_IMU_Fusion_Data", foreignKey: "fk_liner_acceleration_iid"});
  IMU_Fusion_Data.belongsTo(Axis_Data, { as: "gravity", foreignKey: "fk_gravity_iid"});
  Axis_Data.hasMany(IMU_Fusion_Data, { as: "gravity_i_IMU_Fusion_Data", foreignKey: "fk_gravity_iid"});
  IMU_Sensors_Data.belongsTo(Axis_Data, { as: "acceleration", foreignKey: "fk_acceleration_iid"});
  Axis_Data.hasMany(IMU_Sensors_Data, { as: "IMU_Sensors_Data", foreignKey: "fk_acceleration_iid"});
  IMU_Sensors_Data.belongsTo(Axis_Data, { as: "mag_field", foreignKey: "fk_mag_field_iid"});
  Axis_Data.hasMany(IMU_Sensors_Data, { as: "mag_field_i_IMU_Sensors_Data", foreignKey: "fk_mag_field_iid"});
  IMU_Sensors_Data.belongsTo(Axis_Data, { as: "angular_velocity", foreignKey: "fk_angular_velocity_iid"});
  Axis_Data.hasMany(IMU_Sensors_Data, { as: "angular_velocity_i_IMU_Sensors_Data", foreignKey: "fk_angular_velocity_iid"});
  HK_TM_Type.belongsTo(Balloon_Mode, { as: "balloon_mode", foreignKey: "fk_balloon_mode_iid"});
  Balloon_Mode.hasMany(HK_TM_Type, { as: "HK_TM_Types", foreignKey: "fk_balloon_mode_iid"});
  SC_TM_Type.belongsTo(Balloon_Mode, { as: "balloon_mode", foreignKey: "fk_balloon_mode_iid"});
  Balloon_Mode.hasMany(SC_TM_Type, { as: "SC_TM_Types", foreignKey: "fk_balloon_mode_iid"});
  TC_Change_Balloon_Mode.belongsTo(Balloon_Mode, { as: "new_mode", foreignKey: "fk_new_mode_iid"});
  Balloon_Mode.hasMany(TC_Change_Balloon_Mode, { as: "TC_Change_Balloon_Modes", foreignKey: "fk_new_mode_iid"});
  HK_TM_Type_payload.belongsTo(EL_HK_TM_Type, { as: "el_hk", foreignKey: "fk_el_hk_iid"});
  EL_HK_TM_Type.hasMany(HK_TM_Type_payload, { as: "HK_TM_Type_payloads", foreignKey: "fk_el_hk_iid"});
  SC_TM_Type_payload.belongsTo(EL_SC_TM_Type, { as: "el", foreignKey: "fk_el_iid"});
  EL_SC_TM_Type.hasMany(SC_TM_Type_payload, { as: "SC_TM_Type_payloads", foreignKey: "fk_el_iid"});
  EL_SC_TM_Type.belongsTo(EL_SC_TM_Type_dif_barometers, { as: "dif_barometers", foreignKey: "fk_dif_barometers_iid"});
  EL_SC_TM_Type_dif_barometers.hasMany(EL_SC_TM_Type, { as: "EL_SC_TM_Types", foreignKey: "fk_dif_barometers_iid"});
  EL_SC_TM_Type_dif_barometers_indexes.belongsTo(EL_SC_TM_Type_dif_barometers, { as: "EL_SC_TM_Type_dif_barometers", foreignKey: "fk_EL_SC_TM_Type_dif_barometers_iid"});
  EL_SC_TM_Type_dif_barometers.hasMany(EL_SC_TM_Type_dif_barometers_indexes, { as: "EL_SC_TM_Type_dif_barometers_indices", foreignKey: "fk_EL_SC_TM_Type_dif_barometers_iid"});
  DP_Data.belongsTo(EnvLab_Data, { as: "enl", foreignKey: "fk_enl_iid"});
  EnvLab_Data.hasMany(DP_Data, { as: "DP_Data", foreignKey: "fk_enl_iid"});
  EnvLab_Data.belongsTo(EnvLab_Data_payload, { as: "payload", foreignKey: "fk_payload_iid"});
  EnvLab_Data_payload.hasMany(EnvLab_Data, { as: "EnvLab_Data", foreignKey: "fk_payload_iid"});
  EnvLab_Data_payload.belongsTo(EnvLab_Experiment_Data, { as: "upwards", foreignKey: "fk_upwards_iid"});
  EnvLab_Experiment_Data.hasMany(EnvLab_Data_payload, { as: "EnvLab_Data_payloads", foreignKey: "fk_upwards_iid"});
  EnvLab_Data_payload.belongsTo(EnvLab_Experiment_Data, { as: "downwards", foreignKey: "fk_downwards_iid"});
  EnvLab_Experiment_Data.hasMany(EnvLab_Data_payload, { as: "downwards_i_EnvLab_Data_payloads", foreignKey: "fk_downwards_iid"});
  EnvLab_Experiment_Data.belongsTo(EnvLab_Experiment_Data_Sensors, { as: "analogue_data", foreignKey: "fk_analogue_data_iid"});
  EnvLab_Experiment_Data_Sensors.hasMany(EnvLab_Experiment_Data, { as: "EnvLab_Experiment_Data", foreignKey: "fk_analogue_data_iid"});
  EnvLab_Data_payload.belongsTo(EnvLab_Pressure_Data, { as: "pressure_data", foreignKey: "fk_pressure_data_iid"});
  EnvLab_Pressure_Data.hasMany(EnvLab_Data_payload, { as: "EnvLab_Data_payloads", foreignKey: "fk_pressure_data_iid"});
  EnvLab_Pressure_Data.belongsTo(EnvLab_Pressure_Data_abs_barometers, { as: "abs_barometers", foreignKey: "fk_abs_barometers_iid"});
  EnvLab_Pressure_Data_abs_barometers.hasMany(EnvLab_Pressure_Data, { as: "EnvLab_Pressure_Data", foreignKey: "fk_abs_barometers_iid"});
  EnvLab_Pressure_Data_abs_barometers_indexes.belongsTo(EnvLab_Pressure_Data_abs_barometers, { as: "EnvLab_Pressure_Data_abs_barometers", foreignKey: "fk_EnvLab_Pressure_Data_abs_barometers_iid"});
  EnvLab_Pressure_Data_abs_barometers.hasMany(EnvLab_Pressure_Data_abs_barometers_indexes, { as: "EnvLab_Pressure_Data_abs_barometers_indices", foreignKey: "fk_EnvLab_Pressure_Data_abs_barometers_iid"});
  EnvLab_Pressure_Data.belongsTo(EnvLab_Pressure_Data_dif_barometers, { as: "dif_barometers", foreignKey: "fk_dif_barometers_iid"});
  EnvLab_Pressure_Data_dif_barometers.hasMany(EnvLab_Pressure_Data, { as: "EnvLab_Pressure_Data", foreignKey: "fk_dif_barometers_iid"});
  EnvLab_Pressure_Data_dif_barometers_indexes.belongsTo(EnvLab_Pressure_Data_dif_barometers, { as: "EnvLab_Pressure_Data_dif_barometers", foreignKey: "fk_EnvLab_Pressure_Data_dif_barometers_iid"});
  EnvLab_Pressure_Data_dif_barometers.hasMany(EnvLab_Pressure_Data_dif_barometers_indexes, { as: "EnvLab_Pressure_Data_dif_barometers_indices", foreignKey: "fk_EnvLab_Pressure_Data_dif_barometers_iid"});
  Env_Lab_Mode.belongsTo(Env_Lab_Heaters_Mode, { as: "heaters_mode", foreignKey: "fk_heaters_mode_iid"});
  Env_Lab_Heaters_Mode.hasMany(Env_Lab_Mode, { as: "Env_Lab_Modes", foreignKey: "fk_heaters_mode_iid"});
  EnvLab_Data.belongsTo(Env_Lab_Mode, { as: "mode", foreignKey: "fk_mode_iid"});
  Env_Lab_Mode.hasMany(EnvLab_Data, { as: "EnvLab_Data", foreignKey: "fk_mode_iid"});
  Env_Lab_Mode.belongsTo(Env_Lab_Mode_mode, { as: "mode", foreignKey: "fk_mode_iid"});
  Env_Lab_Mode_mode.hasMany(Env_Lab_Mode, { as: "Env_Lab_Modes", foreignKey: "fk_mode_iid"});
  Absolute_Barometer.belongsTo(FLOAT32_Type, { as: "pressure_mbar", foreignKey: "fk_pressure_mbar_iid"});
  FLOAT32_Type.hasMany(Absolute_Barometer, { as: "Absolute_Barometers", foreignKey: "fk_pressure_mbar_iid"});
  Absolute_Barometer.belongsTo(FLOAT32_Type, { as: "temperature_celsius", foreignKey: "fk_temperature_celsius_iid"});
  FLOAT32_Type.hasMany(Absolute_Barometer, { as: "temperature_celsius_i_Absolute_Barometers", foreignKey: "fk_temperature_celsius_iid"});
  Att_Lab_Data.belongsTo(FLOAT32_Type, { as: "mission_time", foreignKey: "fk_mission_time_iid"});
  FLOAT32_Type.hasMany(Att_Lab_Data, { as: "Att_Lab_Data", foreignKey: "fk_mission_time_iid"});
  Axis_Data.belongsTo(FLOAT32_Type, { as: "x", foreignKey: "fk_x_iid"});
  FLOAT32_Type.hasMany(Axis_Data, { as: "Axis_Data", foreignKey: "fk_x_iid"});
  Axis_Data.belongsTo(FLOAT32_Type, { as: "y", foreignKey: "fk_y_iid"});
  FLOAT32_Type.hasMany(Axis_Data, { as: "y_i_Axis_Data", foreignKey: "fk_y_iid"});
  Axis_Data.belongsTo(FLOAT32_Type, { as: "z", foreignKey: "fk_z_iid"});
  FLOAT32_Type.hasMany(Axis_Data, { as: "z_i_Axis_Data", foreignKey: "fk_z_iid"});
  EL_HK_TM_Type.belongsTo(FLOAT32_Type, { as: "abs_pressure_mbar_1", foreignKey: "fk_abs_pressure_mbar_1_iid"});
  FLOAT32_Type.hasMany(EL_HK_TM_Type, { as: "EL_HK_TM_Types", foreignKey: "fk_abs_pressure_mbar_1_iid"});
  EL_HK_TM_Type.belongsTo(FLOAT32_Type, { as: "abs_pressure_mbar_2", foreignKey: "fk_abs_pressure_mbar_2_iid"});
  FLOAT32_Type.hasMany(EL_HK_TM_Type, { as: "abs_pressure_mbar_2_i_EL_HK_TM_Types", foreignKey: "fk_abs_pressure_mbar_2_iid"});
  EnvLab_Data.belongsTo(FLOAT32_Type, { as: "mission_time", foreignKey: "fk_mission_time_iid"});
  FLOAT32_Type.hasMany(EnvLab_Data, { as: "EnvLab_Data", foreignKey: "fk_mission_time_iid"});
  GPS_Data.belongsTo(FLOAT32_Type, { as: "latitude_deg", foreignKey: "fk_latitude_deg_iid"});
  FLOAT32_Type.hasMany(GPS_Data, { as: "GPS_Data", foreignKey: "fk_latitude_deg_iid"});
  GPS_Data.belongsTo(FLOAT32_Type, { as: "longitude_deg", foreignKey: "fk_longitude_deg_iid"});
  FLOAT32_Type.hasMany(GPS_Data, { as: "longitude_deg_i_GPS_Data", foreignKey: "fk_longitude_deg_iid"});
  GPS_Data.belongsTo(FLOAT32_Type, { as: "altitude_m", foreignKey: "fk_altitude_m_iid"});
  FLOAT32_Type.hasMany(GPS_Data, { as: "altitude_m_i_GPS_Data", foreignKey: "fk_altitude_m_iid"});
  GPS_Data.belongsTo(FLOAT32_Type, { as: "sog_knots", foreignKey: "fk_sog_knots_iid"});
  FLOAT32_Type.hasMany(GPS_Data, { as: "sog_knots_i_GPS_Data", foreignKey: "fk_sog_knots_iid"});
  GPS_Data.belongsTo(FLOAT32_Type, { as: "cog_deg", foreignKey: "fk_cog_deg_iid"});
  FLOAT32_Type.hasMany(GPS_Data, { as: "cog_deg_i_GPS_Data", foreignKey: "fk_cog_deg_iid"});
  HTL_Data.belongsTo(FLOAT32_Type, { as: "mission_time", foreignKey: "fk_mission_time_iid"});
  FLOAT32_Type.hasMany(HTL_Data, { as: "HTL_Data", foreignKey: "fk_mission_time_iid"});
  IMU_CalibrationOffsets.belongsTo(FLOAT32_Type, { as: "accel_offset_x", foreignKey: "fk_accel_offset_x_iid"});
  FLOAT32_Type.hasMany(IMU_CalibrationOffsets, { as: "IMU_CalibrationOffsets", foreignKey: "fk_accel_offset_x_iid"});
  IMU_CalibrationOffsets.belongsTo(FLOAT32_Type, { as: "accel_radius", foreignKey: "fk_accel_radius_iid"});
  FLOAT32_Type.hasMany(IMU_CalibrationOffsets, { as: "accel_radius_i_IMU_CalibrationOffsets", foreignKey: "fk_accel_radius_iid"});
  IMU_CalibrationOffsets.belongsTo(FLOAT32_Type, { as: "mgm_radius", foreignKey: "fk_mgm_radius_iid"});
  FLOAT32_Type.hasMany(IMU_CalibrationOffsets, { as: "mgm_radius_i_IMU_CalibrationOffsets", foreignKey: "fk_mgm_radius_iid"});
  IMU_CalibrationOffsets.belongsTo(FLOAT32_Type, { as: "accel_offset_y", foreignKey: "fk_accel_offset_y_iid"});
  FLOAT32_Type.hasMany(IMU_CalibrationOffsets, { as: "accel_offset_y_i_IMU_CalibrationOffsets", foreignKey: "fk_accel_offset_y_iid"});
  IMU_CalibrationOffsets.belongsTo(FLOAT32_Type, { as: "accel_offset_z", foreignKey: "fk_accel_offset_z_iid"});
  FLOAT32_Type.hasMany(IMU_CalibrationOffsets, { as: "accel_offset_z_i_IMU_CalibrationOffsets", foreignKey: "fk_accel_offset_z_iid"});
  IMU_CalibrationOffsets.belongsTo(FLOAT32_Type, { as: "gyro_offset_x", foreignKey: "fk_gyro_offset_x_iid"});
  FLOAT32_Type.hasMany(IMU_CalibrationOffsets, { as: "gyro_offset_x_i_IMU_CalibrationOffsets", foreignKey: "fk_gyro_offset_x_iid"});
  IMU_CalibrationOffsets.belongsTo(FLOAT32_Type, { as: "gyro_offset_y", foreignKey: "fk_gyro_offset_y_iid"});
  FLOAT32_Type.hasMany(IMU_CalibrationOffsets, { as: "gyro_offset_y_i_IMU_CalibrationOffsets", foreignKey: "fk_gyro_offset_y_iid"});
  IMU_CalibrationOffsets.belongsTo(FLOAT32_Type, { as: "gyro_offset_z", foreignKey: "fk_gyro_offset_z_iid"});
  FLOAT32_Type.hasMany(IMU_CalibrationOffsets, { as: "gyro_offset_z_i_IMU_CalibrationOffsets", foreignKey: "fk_gyro_offset_z_iid"});
  IMU_CalibrationOffsets.belongsTo(FLOAT32_Type, { as: "mgm_offset_x", foreignKey: "fk_mgm_offset_x_iid"});
  FLOAT32_Type.hasMany(IMU_CalibrationOffsets, { as: "mgm_offset_x_i_IMU_CalibrationOffsets", foreignKey: "fk_mgm_offset_x_iid"});
  IMU_CalibrationOffsets.belongsTo(FLOAT32_Type, { as: "mgm_offset_y", foreignKey: "fk_mgm_offset_y_iid"});
  FLOAT32_Type.hasMany(IMU_CalibrationOffsets, { as: "mgm_offset_y_i_IMU_CalibrationOffsets", foreignKey: "fk_mgm_offset_y_iid"});
  IMU_CalibrationOffsets.belongsTo(FLOAT32_Type, { as: "mgm_offset_z", foreignKey: "fk_mgm_offset_z_iid"});
  FLOAT32_Type.hasMany(IMU_CalibrationOffsets, { as: "mgm_offset_z_i_IMU_CalibrationOffsets", foreignKey: "fk_mgm_offset_z_iid"});
  NADS_Data.belongsTo(FLOAT32_Type, { as: "mission_time", foreignKey: "fk_mission_time_iid"});
  FLOAT32_Type.hasMany(NADS_Data, { as: "NADS_Data", foreignKey: "fk_mission_time_iid"});
  PCU_Data.belongsTo(FLOAT32_Type, { as: "mission_time", foreignKey: "fk_mission_time_iid"});
  FLOAT32_Type.hasMany(PCU_Data, { as: "PCU_Data", foreignKey: "fk_mission_time_iid"});
  PCU_Data_payload_sensor_data.belongsTo(FLOAT32_Type, { as: "power_watts", foreignKey: "fk_power_watts_iid"});
  FLOAT32_Type.hasMany(PCU_Data_payload_sensor_data, { as: "PCU_Data_payload_sensor_data", foreignKey: "fk_power_watts_iid"});
  PCU_Data_payload_sensor_data.belongsTo(FLOAT32_Type, { as: "current_amps", foreignKey: "fk_current_amps_iid"});
  FLOAT32_Type.hasMany(PCU_Data_payload_sensor_data, { as: "current_amps_i_PCU_Data_payload_sensor_data", foreignKey: "fk_current_amps_iid"});
  PCU_Data_payload_sensor_data.belongsTo(FLOAT32_Type, { as: "voltage_bus_volts", foreignKey: "fk_voltage_bus_volts_iid"});
  FLOAT32_Type.hasMany(PCU_Data_payload_sensor_data, { as: "voltage_bus_volts_i_PCU_Data_payload_sensor_data", foreignKey: "fk_voltage_bus_volts_iid"});
  PCU_Data_payload_sensor_data.belongsTo(FLOAT32_Type, { as: "voltage_shunt_volts", foreignKey: "fk_voltage_shunt_volts_iid"});
  FLOAT32_Type.hasMany(PCU_Data_payload_sensor_data, { as: "voltage_shunt_volts_i_PCU_Data_payload_sensor_data", foreignKey: "fk_voltage_shunt_volts_iid"});
  PCU_HK_TM_Type.belongsTo(FLOAT32_Type, { as: "v_bat", foreignKey: "fk_v_bat_iid"});
  FLOAT32_Type.hasMany(PCU_HK_TM_Type, { as: "PCU_HK_TM_Types", foreignKey: "fk_v_bat_iid"});
  PCU_HK_TM_Type.belongsTo(FLOAT32_Type, { as: "a_bat", foreignKey: "fk_a_bat_iid"});
  FLOAT32_Type.hasMany(PCU_HK_TM_Type, { as: "a_bat_i_PCU_HK_TM_Types", foreignKey: "fk_a_bat_iid"});
  Quaternion_Data.belongsTo(FLOAT32_Type, { as: "w", foreignKey: "fk_w_iid"});
  FLOAT32_Type.hasMany(Quaternion_Data, { as: "Quaternion_Data", foreignKey: "fk_w_iid"});
  Quaternion_Data.belongsTo(FLOAT32_Type, { as: "x", foreignKey: "fk_x_iid"});
  FLOAT32_Type.hasMany(Quaternion_Data, { as: "x_i_Quaternion_Data", foreignKey: "fk_x_iid"});
  Quaternion_Data.belongsTo(FLOAT32_Type, { as: "y", foreignKey: "fk_y_iid"});
  FLOAT32_Type.hasMany(Quaternion_Data, { as: "y_i_Quaternion_Data", foreignKey: "fk_y_iid"});
  Quaternion_Data.belongsTo(FLOAT32_Type, { as: "z", foreignKey: "fk_z_iid"});
  FLOAT32_Type.hasMany(Quaternion_Data, { as: "z_i_Quaternion_Data", foreignKey: "fk_z_iid"});
  NADS_Data_payload.belongsTo(GPS_Data, { as: "gps", foreignKey: "fk_gps_iid"});
  GPS_Data.hasMany(NADS_Data_payload, { as: "NADS_Data_payloads", foreignKey: "fk_gps_iid"});
  NADS_SC_TM_Type.belongsTo(GPS_Data, { as: "gps", foreignKey: "fk_gps_iid"});
  GPS_Data.hasMany(NADS_SC_TM_Type, { as: "NADS_SC_TM_Types", foreignKey: "fk_gps_iid"});
  TM_Type.belongsTo(HK_TM_Type, { as: "housekeeping_tm", foreignKey: "fk_housekeeping_tm_iid"});
  HK_TM_Type.hasMany(TM_Type, { as: "TM_Types", foreignKey: "fk_housekeeping_tm_iid"});
  HK_TM_Type.belongsTo(HK_TM_Type_payload, { as: "payload", foreignKey: "fk_payload_iid"});
  HK_TM_Type_payload.hasMany(HK_TM_Type, { as: "HK_TM_Types", foreignKey: "fk_payload_iid"});
  DP_Data.belongsTo(HTL_Data, { as: "htl", foreignKey: "fk_htl_iid"});
  HTL_Data.hasMany(DP_Data, { as: "DP_Data", foreignKey: "fk_htl_iid"});
  HTL_Data.belongsTo(HTL_Data_payload, { as: "payload", foreignKey: "fk_payload_iid"});
  HTL_Data_payload.hasMany(HTL_Data, { as: "HTL_Data", foreignKey: "fk_payload_iid"});
  HTL_Data_payload.belongsTo(HTL_Data_payload_heaters, { as: "heaters", foreignKey: "fk_heaters_iid"});
  HTL_Data_payload_heaters.hasMany(HTL_Data_payload, { as: "HTL_Data_payloads", foreignKey: "fk_heaters_iid"});
  HTL_Data_payload_heaters_indexes.belongsTo(HTL_Data_payload_heaters, { as: "HTL_Data_payload_heaters", foreignKey: "fk_HTL_Data_payload_heaters_iid"});
  HTL_Data_payload_heaters.hasMany(HTL_Data_payload_heaters_indexes, { as: "HTL_Data_payload_heaters_indices", foreignKey: "fk_HTL_Data_payload_heaters_iid"});
  HTL_Data_payload.belongsTo(HTL_Data_payload_thermistors, { as: "thermistors", foreignKey: "fk_thermistors_iid"});
  HTL_Data_payload_thermistors.hasMany(HTL_Data_payload, { as: "HTL_Data_payloads", foreignKey: "fk_thermistors_iid"});
  HTL_Data_payload_thermistors_indexes.belongsTo(HTL_Data_payload_thermistors, { as: "HTL_Data_payload_thermistors", foreignKey: "fk_HTL_Data_payload_thermistors_iid"});
  HTL_Data_payload_thermistors.hasMany(HTL_Data_payload_thermistors_indexes, { as: "HTL_Data_payload_thermistors_indices", foreignKey: "fk_HTL_Data_payload_thermistors_iid"});
  HTL_Mode.belongsTo(HTL_Heaters_Mode, { as: "heaters_mode", foreignKey: "fk_heaters_mode_iid"});
  HTL_Heaters_Mode.hasMany(HTL_Mode, { as: "HTL_Modes", foreignKey: "fk_heaters_mode_iid"});
  HTL_Data.belongsTo(HTL_Mode, { as: "mode", foreignKey: "fk_mode_iid"});
  HTL_Mode.hasMany(HTL_Data, { as: "HTL_Data", foreignKey: "fk_mode_iid"});
  HTL_Mode.belongsTo(HTL_Mode_mode, { as: "mode", foreignKey: "fk_mode_iid"});
  HTL_Mode_mode.hasMany(HTL_Mode, { as: "HTL_Modes", foreignKey: "fk_mode_iid"});
  SC_TM_Type_payload.belongsTo(HTL_SC_TM_Type, { as: "htl", foreignKey: "fk_htl_iid"});
  HTL_SC_TM_Type.hasMany(SC_TM_Type_payload, { as: "SC_TM_Type_payloads", foreignKey: "fk_htl_iid"});
  HTL_SC_TM_Type.belongsTo(HTL_SC_TM_Type_heaters, { as: "heaters", foreignKey: "fk_heaters_iid"});
  HTL_SC_TM_Type_heaters.hasMany(HTL_SC_TM_Type, { as: "HTL_SC_TM_Types", foreignKey: "fk_heaters_iid"});
  HTL_SC_TM_Type_heaters_indexes.belongsTo(HTL_SC_TM_Type_heaters, { as: "HTL_SC_TM_Type_heaters", foreignKey: "fk_HTL_SC_TM_Type_heaters_iid"});
  HTL_SC_TM_Type_heaters.hasMany(HTL_SC_TM_Type_heaters_indexes, { as: "HTL_SC_TM_Type_heaters_indices", foreignKey: "fk_HTL_SC_TM_Type_heaters_iid"});
  TC_Control_Experiment_Heater.belongsTo(Heater_ID, { as: "heater", foreignKey: "fk_heater_iid"});
  Heater_ID.hasMany(TC_Control_Experiment_Heater, { as: "TC_Control_Experiment_Heaters", foreignKey: "fk_heater_iid"});
  TC_Start_Manual_Control.belongsTo(Heater_ID, { as: "heater", foreignKey: "fk_heater_iid"});
  Heater_ID.hasMany(TC_Start_Manual_Control, { as: "TC_Start_Manual_Controls", foreignKey: "fk_heater_iid"});
  TC_Stop_Manual_Control.belongsTo(Heater_ID, { as: "heater", foreignKey: "fk_heater_iid"});
  Heater_ID.hasMany(TC_Stop_Manual_Control, { as: "TC_Stop_Manual_Controls", foreignKey: "fk_heater_iid"});
  HTL_Data_payload_heaters_indexes.belongsTo(Heater_Power_Type, { as: "Heater_Power_Type", foreignKey: "fk_Heater_Power_Type_iid"});
  Heater_Power_Type.hasMany(HTL_Data_payload_heaters_indexes, { as: "HTL_Data_payload_heaters_indices", foreignKey: "fk_Heater_Power_Type_iid"});
  HTL_SC_TM_Type_heaters_indexes.belongsTo(Heater_Power_Type, { as: "Heater_Power_Type", foreignKey: "fk_Heater_Power_Type_iid"});
  Heater_Power_Type.hasMany(HTL_SC_TM_Type_heaters_indexes, { as: "HTL_SC_TM_Type_heaters_indices", foreignKey: "fk_Heater_Power_Type_iid"});
  TC_Control_Experiment_Heater.belongsTo(Heater_Power_Type, { as: "heater_power", foreignKey: "fk_heater_power_iid"});
  Heater_Power_Type.hasMany(TC_Control_Experiment_Heater, { as: "TC_Control_Experiment_Heaters", foreignKey: "fk_heater_power_iid"});
  IMU_Calibration_Commands.belongsTo(IMU_AxesConfiguration, { as: "set_axes_configuration", foreignKey: "fk_set_axes_configuration_iid"});
  IMU_AxesConfiguration.hasMany(IMU_Calibration_Commands, { as: "IMU_Calibration_Commands", foreignKey: "fk_set_axes_configuration_iid"});
  IMU_Parameters.belongsTo(IMU_AxesConfiguration, { as: "axes_configuration", foreignKey: "fk_axes_configuration_iid"});
  IMU_AxesConfiguration.hasMany(IMU_Parameters, { as: "IMU_Parameters", foreignKey: "fk_axes_configuration_iid"});
  IMU_AxesConfiguration.belongsTo(IMU_AxisSelection, { as: "x", foreignKey: "fk_x_iid"});
  IMU_AxisSelection.hasMany(IMU_AxesConfiguration, { as: "IMU_AxesConfigurations", foreignKey: "fk_x_iid"});
  IMU_AxesConfiguration.belongsTo(IMU_AxisSelection, { as: "y", foreignKey: "fk_y_iid"});
  IMU_AxisSelection.hasMany(IMU_AxesConfiguration, { as: "y_i_IMU_AxesConfigurations", foreignKey: "fk_y_iid"});
  IMU_AxesConfiguration.belongsTo(IMU_AxisSelection, { as: "z", foreignKey: "fk_z_iid"});
  IMU_AxisSelection.hasMany(IMU_AxesConfiguration, { as: "z_i_IMU_AxesConfigurations", foreignKey: "fk_z_iid"});
  IMU_AxisSelection.belongsTo(IMU_AxisSelection_remap, { as: "remap", foreignKey: "fk_remap_iid"});
  IMU_AxisSelection_remap.hasMany(IMU_AxisSelection, { as: "IMU_AxisSelections", foreignKey: "fk_remap_iid"});
  IMU_AxisSelection.belongsTo(IMU_AxisSelection_sign, { as: "sign", foreignKey: "fk_sign_iid"});
  IMU_AxisSelection_sign.hasMany(IMU_AxisSelection, { as: "IMU_AxisSelections", foreignKey: "fk_sign_iid"});
  IMU_Parameters_calibration_parameters_calibration_states.belongsTo(IMU_CalibrationLevel, { as: "platform", foreignKey: "fk_platform_iid"});
  IMU_CalibrationLevel.hasMany(IMU_Parameters_calibration_parameters_calibration_states, { as: "IMU_Parameters_calibration_parameters_calibration_states", foreignKey: "fk_platform_iid"});
  IMU_Parameters_calibration_parameters_calibration_states.belongsTo(IMU_CalibrationLevel, { as: "gyroscope", foreignKey: "fk_gyroscope_iid"});
  IMU_CalibrationLevel.hasMany(IMU_Parameters_calibration_parameters_calibration_states, { as: "gyroscope_i_IMU_Parameters_calibration_parameters_calibration_states", foreignKey: "fk_gyroscope_iid"});
  IMU_Parameters_calibration_parameters_calibration_states.belongsTo(IMU_CalibrationLevel, { as: "accelerometer", foreignKey: "fk_accelerometer_iid"});
  IMU_CalibrationLevel.hasMany(IMU_Parameters_calibration_parameters_calibration_states, { as: "accelerometer_i_IMU_Parameters_calibration_parameters_calibration_states", foreignKey: "fk_accelerometer_iid"});
  IMU_Parameters_calibration_parameters_calibration_states.belongsTo(IMU_CalibrationLevel, { as: "magnetometer", foreignKey: "fk_magnetometer_iid"});
  IMU_CalibrationLevel.hasMany(IMU_Parameters_calibration_parameters_calibration_states, { as: "magnetometer_i_IMU_Parameters_calibration_parameters_calibration_states", foreignKey: "fk_magnetometer_iid"});
  IMU_Calibration_Commands.belongsTo(IMU_CalibrationOffsets, { as: "set_calibration_offsets", foreignKey: "fk_set_calibration_offsets_iid"});
  IMU_CalibrationOffsets.hasMany(IMU_Calibration_Commands, { as: "IMU_Calibration_Commands", foreignKey: "fk_set_calibration_offsets_iid"});
  IMU_Parameters_calibration_parameters.belongsTo(IMU_CalibrationOffsets, { as: "offsets", foreignKey: "fk_offsets_iid"});
  IMU_CalibrationOffsets.hasMany(IMU_Parameters_calibration_parameters, { as: "IMU_Parameters_calibration_parameters", foreignKey: "fk_offsets_iid"});
  NADS_Data_payload.belongsTo(IMU_Data, { as: "imu", foreignKey: "fk_imu_iid"});
  IMU_Data.hasMany(NADS_Data_payload, { as: "NADS_Data_payloads", foreignKey: "fk_imu_iid"});
  IMU_Data.belongsTo(IMU_Fusion_Data, { as: "fusion_data", foreignKey: "fk_fusion_data_iid"});
  IMU_Fusion_Data.hasMany(IMU_Data, { as: "IMU_Data", foreignKey: "fk_fusion_data_iid"});
  IMU_Calibration_Commands.belongsTo(IMU_OperatingMode, { as: "set_imu_operating_mode", foreignKey: "fk_set_imu_operating_mode_iid"});
  IMU_OperatingMode.hasMany(IMU_Calibration_Commands, { as: "IMU_Calibration_Commands", foreignKey: "fk_set_imu_operating_mode_iid"});
  IMU_Parameters.belongsTo(IMU_OperatingMode, { as: "operating_mode", foreignKey: "fk_operating_mode_iid"});
  IMU_OperatingMode.hasMany(IMU_Parameters, { as: "IMU_Parameters", foreignKey: "fk_operating_mode_iid"});
  IMU_Parameters.belongsTo(IMU_Parameters_calibration_parameters, { as: "calibration_parameters", foreignKey: "fk_calibration_parameters_iid"});
  IMU_Parameters_calibration_parameters.hasMany(IMU_Parameters, { as: "IMU_Parameters", foreignKey: "fk_calibration_parameters_iid"});
  IMU_Parameters_calibration_parameters.belongsTo(IMU_Parameters_calibration_parameters_calibration_states, { as: "calibration_states", foreignKey: "fk_calibration_states_iid"});
  IMU_Parameters_calibration_parameters_calibration_states.hasMany(IMU_Parameters_calibration_parameters, { as: "IMU_Parameters_calibration_parameters", foreignKey: "fk_calibration_states_iid"});
  IMU_Data.belongsTo(IMU_Sensors_Data, { as: "sensors_data", foreignKey: "fk_sensors_data_iid"});
  IMU_Sensors_Data.hasMany(IMU_Data, { as: "IMU_Data", foreignKey: "fk_sensors_data_iid"});
  NADS_SC_TM_Type.belongsTo(IMU_Sensors_Data, { as: "imu_sensors", foreignKey: "fk_imu_sensors_iid"});
  IMU_Sensors_Data.hasMany(NADS_SC_TM_Type, { as: "NADS_SC_TM_Types", foreignKey: "fk_imu_sensors_iid"});
  IMU_Data.belongsTo(IMU_Temperatures, { as: "temperatures", foreignKey: "fk_temperatures_iid"});
  IMU_Temperatures.hasMany(IMU_Data, { as: "IMU_Data", foreignKey: "fk_temperatures_iid"});
  ATL_HK_TM_Type_temperatures_indexes.belongsTo(INT16_Type, { as: "INT16_Type", foreignKey: "fk_INT16_Type_iid"});
  INT16_Type.hasMany(ATL_HK_TM_Type_temperatures_indexes, { as: "ATL_HK_TM_Type_temperatures_indices", foreignKey: "fk_INT16_Type_iid"});
  ATL_SC_TM_Type_photodiodes_indexes.belongsTo(INT16_Type, { as: "INT16_Type", foreignKey: "fk_INT16_Type_iid"});
  INT16_Type.hasMany(ATL_SC_TM_Type_photodiodes_indexes, { as: "ATL_SC_TM_Type_photodiodes_indices", foreignKey: "fk_INT16_Type_iid"});
  Absolute_Barometer.belongsTo(INT16_Type, { as: "pressure_raw", foreignKey: "fk_pressure_raw_iid"});
  INT16_Type.hasMany(Absolute_Barometer, { as: "Absolute_Barometers", foreignKey: "fk_pressure_raw_iid"});
  Absolute_Barometer.belongsTo(INT16_Type, { as: "temperature_raw", foreignKey: "fk_temperature_raw_iid"});
  INT16_Type.hasMany(Absolute_Barometer, { as: "temperature_raw_i_Absolute_Barometers", foreignKey: "fk_temperature_raw_iid"});
  Att_Lab_Data_Measurements_photodiodes_indexes.belongsTo(INT16_Type, { as: "INT16_Type", foreignKey: "fk_INT16_Type_iid"});
  INT16_Type.hasMany(Att_Lab_Data_Measurements_photodiodes_indexes, { as: "Att_Lab_Data_Measurements_photodiodes_indices", foreignKey: "fk_INT16_Type_iid"});
  Att_Lab_Data_Measurements_thermistors_indexes.belongsTo(INT16_Type, { as: "INT16_Type", foreignKey: "fk_INT16_Type_iid"});
  INT16_Type.hasMany(Att_Lab_Data_Measurements_thermistors_indexes, { as: "Att_Lab_Data_Measurements_thermistors_indices", foreignKey: "fk_INT16_Type_iid"});
  EL_HK_TM_Type.belongsTo(INT16_Type, { as: "upwards_pyranometer_temperature", foreignKey: "fk_upwards_pyranometer_temperature_iid"});
  INT16_Type.hasMany(EL_HK_TM_Type, { as: "EL_HK_TM_Types", foreignKey: "fk_upwards_pyranometer_temperature_iid"});
  EL_HK_TM_Type.belongsTo(INT16_Type, { as: "upwards_pyrgeometer_temperature", foreignKey: "fk_upwards_pyrgeometer_temperature_iid"});
  INT16_Type.hasMany(EL_HK_TM_Type, { as: "upwards_pyrgeometer_temperature_i_EL_HK_TM_Types", foreignKey: "fk_upwards_pyrgeometer_temperature_iid"});
  EL_HK_TM_Type.belongsTo(INT16_Type, { as: "downwards_pyranometer_temperature", foreignKey: "fk_downwards_pyranometer_temperature_iid"});
  INT16_Type.hasMany(EL_HK_TM_Type, { as: "downwards_pyranometer_temperature_i_EL_HK_TM_Types", foreignKey: "fk_downwards_pyranometer_temperature_iid"});
  EL_HK_TM_Type.belongsTo(INT16_Type, { as: "downwards_pyrgeometer_temperature", foreignKey: "fk_downwards_pyrgeometer_temperature_iid"});
  INT16_Type.hasMany(EL_HK_TM_Type, { as: "downwards_pyrgeometer_temperature_i_EL_HK_TM_Types", foreignKey: "fk_downwards_pyrgeometer_temperature_iid"});
  EL_SC_TM_Type.belongsTo(INT16_Type, { as: "upwards_pyranometer", foreignKey: "fk_upwards_pyranometer_iid"});
  INT16_Type.hasMany(EL_SC_TM_Type, { as: "EL_SC_TM_Types", foreignKey: "fk_upwards_pyranometer_iid"});
  EL_SC_TM_Type.belongsTo(INT16_Type, { as: "upwards_pyrgeometer", foreignKey: "fk_upwards_pyrgeometer_iid"});
  INT16_Type.hasMany(EL_SC_TM_Type, { as: "upwards_pyrgeometer_i_EL_SC_TM_Types", foreignKey: "fk_upwards_pyrgeometer_iid"});
  EL_SC_TM_Type.belongsTo(INT16_Type, { as: "downwards_pyranometer", foreignKey: "fk_downwards_pyranometer_iid"});
  INT16_Type.hasMany(EL_SC_TM_Type, { as: "downwards_pyranometer_i_EL_SC_TM_Types", foreignKey: "fk_downwards_pyranometer_iid"});
  EL_SC_TM_Type.belongsTo(INT16_Type, { as: "downwards_pyrgeometer", foreignKey: "fk_downwards_pyrgeometer_iid"});
  INT16_Type.hasMany(EL_SC_TM_Type, { as: "downwards_pyrgeometer_i_EL_SC_TM_Types", foreignKey: "fk_downwards_pyrgeometer_iid"});
  EL_SC_TM_Type_dif_barometers_indexes.belongsTo(INT16_Type, { as: "INT16_Type", foreignKey: "fk_INT16_Type_iid"});
  INT16_Type.hasMany(EL_SC_TM_Type_dif_barometers_indexes, { as: "EL_SC_TM_Type_dif_barometers_indices", foreignKey: "fk_INT16_Type_iid"});
  EnvLab_Experiment_Data_Sensors.belongsTo(INT16_Type, { as: "pyranometer_reading", foreignKey: "fk_pyranometer_reading_iid"});
  INT16_Type.hasMany(EnvLab_Experiment_Data_Sensors, { as: "EnvLab_Experiment_Data_Sensors", foreignKey: "fk_pyranometer_reading_iid"});
  EnvLab_Experiment_Data_Sensors.belongsTo(INT16_Type, { as: "pyrgeometer_reading", foreignKey: "fk_pyrgeometer_reading_iid"});
  INT16_Type.hasMany(EnvLab_Experiment_Data_Sensors, { as: "pyrgeometer_reading_i_EnvLab_Experiment_Data_Sensors", foreignKey: "fk_pyrgeometer_reading_iid"});
  EnvLab_Experiment_Data_Sensors.belongsTo(INT16_Type, { as: "pyranometer_temperature", foreignKey: "fk_pyranometer_temperature_iid"});
  INT16_Type.hasMany(EnvLab_Experiment_Data_Sensors, { as: "pyranometer_temperature_i_EnvLab_Experiment_Data_Sensors", foreignKey: "fk_pyranometer_temperature_iid"});
  EnvLab_Experiment_Data_Sensors.belongsTo(INT16_Type, { as: "pyrgeometer_temperature", foreignKey: "fk_pyrgeometer_temperature_iid"});
  INT16_Type.hasMany(EnvLab_Experiment_Data_Sensors, { as: "pyrgeometer_temperature_i_EnvLab_Experiment_Data_Sensors", foreignKey: "fk_pyrgeometer_temperature_iid"});
  EnvLab_Pressure_Data_dif_barometers_indexes.belongsTo(INT16_Type, { as: "INT16_Type", foreignKey: "fk_INT16_Type_iid"});
  INT16_Type.hasMany(EnvLab_Pressure_Data_dif_barometers_indexes, { as: "EnvLab_Pressure_Data_dif_barometers_indices", foreignKey: "fk_INT16_Type_iid"});
  HTL_Data_payload_thermistors_indexes.belongsTo(INT16_Type, { as: "INT16_Type", foreignKey: "fk_INT16_Type_iid"});
  INT16_Type.hasMany(HTL_Data_payload_thermistors_indexes, { as: "HTL_Data_payload_thermistors_indices", foreignKey: "fk_INT16_Type_iid"});
  HTL_SC_TM_Type.belongsTo(INT16_Type, { as: "exp2_air_cavity_intermediate_height", foreignKey: "fk_exp2_air_cavity_intermediate_height_iid"});
  INT16_Type.hasMany(HTL_SC_TM_Type, { as: "HTL_SC_TM_Types", foreignKey: "fk_exp2_air_cavity_intermediate_height_iid"});
  HTL_SC_TM_Type.belongsTo(INT16_Type, { as: "exp2_air_cavity_upper_height", foreignKey: "fk_exp2_air_cavity_upper_height_iid"});
  INT16_Type.hasMany(HTL_SC_TM_Type, { as: "exp2_air_cavity_upper_height_i_HTL_SC_TM_Types", foreignKey: "fk_exp2_air_cavity_upper_height_iid"});
  HTL_SC_TM_Type.belongsTo(INT16_Type, { as: "exp3_air_cavity_intermediate_height", foreignKey: "fk_exp3_air_cavity_intermediate_height_iid"});
  INT16_Type.hasMany(HTL_SC_TM_Type, { as: "exp3_air_cavity_intermediate_height_i_HTL_SC_TM_Types", foreignKey: "fk_exp3_air_cavity_intermediate_height_iid"});
  HTL_SC_TM_Type.belongsTo(INT16_Type, { as: "exp3_air_cavity_upper_height", foreignKey: "fk_exp3_air_cavity_upper_height_iid"});
  INT16_Type.hasMany(HTL_SC_TM_Type, { as: "exp3_air_cavity_upper_height_i_HTL_SC_TM_Types", foreignKey: "fk_exp3_air_cavity_upper_height_iid"});
  HTL_SC_TM_Type.belongsTo(INT16_Type, { as: "exp4_air_cavity_small_intermediate_1", foreignKey: "fk_exp4_air_cavity_small_intermediate_1_iid"});
  INT16_Type.hasMany(HTL_SC_TM_Type, { as: "exp4_air_cavity_small_intermediate_1_i_HTL_SC_TM_Types", foreignKey: "fk_exp4_air_cavity_small_intermediate_1_iid"});
  HTL_SC_TM_Type.belongsTo(INT16_Type, { as: "exp4_air_cavity_small_intermediate_2", foreignKey: "fk_exp4_air_cavity_small_intermediate_2_iid"});
  INT16_Type.hasMany(HTL_SC_TM_Type, { as: "exp4_air_cavity_small_intermediate_2_i_HTL_SC_TM_Types", foreignKey: "fk_exp4_air_cavity_small_intermediate_2_iid"});
  HTL_SC_TM_Type.belongsTo(INT16_Type, { as: "exp4_air_cavity_big_intermediate_1", foreignKey: "fk_exp4_air_cavity_big_intermediate_1_iid"});
  INT16_Type.hasMany(HTL_SC_TM_Type, { as: "exp4_air_cavity_big_intermediate_1_i_HTL_SC_TM_Types", foreignKey: "fk_exp4_air_cavity_big_intermediate_1_iid"});
  HTL_SC_TM_Type.belongsTo(INT16_Type, { as: "exp4_air_cavity_big_intermediate_2", foreignKey: "fk_exp4_air_cavity_big_intermediate_2_iid"});
  INT16_Type.hasMany(HTL_SC_TM_Type, { as: "exp4_air_cavity_big_intermediate_2_i_HTL_SC_TM_Types", foreignKey: "fk_exp4_air_cavity_big_intermediate_2_iid"});
  HTL_SC_TM_Type.belongsTo(INT16_Type, { as: "exp1_horizontal_heated_plate", foreignKey: "fk_exp1_horizontal_heated_plate_iid"});
  INT16_Type.hasMany(HTL_SC_TM_Type, { as: "exp1_horizontal_heated_plate_i_HTL_SC_TM_Types", foreignKey: "fk_exp1_horizontal_heated_plate_iid"});
  HTL_SC_TM_Type.belongsTo(INT16_Type, { as: "exp2_vertical_heated_plate", foreignKey: "fk_exp2_vertical_heated_plate_iid"});
  INT16_Type.hasMany(HTL_SC_TM_Type, { as: "exp2_vertical_heated_plate_i_HTL_SC_TM_Types", foreignKey: "fk_exp2_vertical_heated_plate_iid"});
  HTL_SC_TM_Type.belongsTo(INT16_Type, { as: "exp3_horizontal_heated_plate", foreignKey: "fk_exp3_horizontal_heated_plate_iid"});
  INT16_Type.hasMany(HTL_SC_TM_Type, { as: "exp3_horizontal_heated_plate_i_HTL_SC_TM_Types", foreignKey: "fk_exp3_horizontal_heated_plate_iid"});
  HTL_SC_TM_Type.belongsTo(INT16_Type, { as: "exp4_inner_vertical_plate_surface", foreignKey: "fk_exp4_inner_vertical_plate_surface_iid"});
  INT16_Type.hasMany(HTL_SC_TM_Type, { as: "exp4_inner_vertical_plate_surface_i_HTL_SC_TM_Types", foreignKey: "fk_exp4_inner_vertical_plate_surface_iid"});
  HTL_SC_TM_Type.belongsTo(INT16_Type, { as: "exp4_intermediate_heated_plate_surface", foreignKey: "fk_exp4_intermediate_heated_plate_surface_iid"});
  INT16_Type.hasMany(HTL_SC_TM_Type, { as: "exp4_intermediate_heated_plate_surface_i_HTL_SC_TM_Types", foreignKey: "fk_exp4_intermediate_heated_plate_surface_iid"});
  HTL_SC_TM_Type.belongsTo(INT16_Type, { as: "exp4_exterior_plate_surface", foreignKey: "fk_exp4_exterior_plate_surface_iid"});
  INT16_Type.hasMany(HTL_SC_TM_Type, { as: "exp4_exterior_plate_surface_i_HTL_SC_TM_Types", foreignKey: "fk_exp4_exterior_plate_surface_iid"});
  HTL_SC_TM_Type.belongsTo(INT16_Type, { as: "exp1_air_cavity_intermediate_height", foreignKey: "fk_exp1_air_cavity_intermediate_height_iid"});
  INT16_Type.hasMany(HTL_SC_TM_Type, { as: "exp1_air_cavity_intermediate_height_i_HTL_SC_TM_Types", foreignKey: "fk_exp1_air_cavity_intermediate_height_iid"});
  HTL_SC_TM_Type.belongsTo(INT16_Type, { as: "exp1_air_cavity_upper_height", foreignKey: "fk_exp1_air_cavity_upper_height_iid"});
  INT16_Type.hasMany(HTL_SC_TM_Type, { as: "exp1_air_cavity_upper_height_i_HTL_SC_TM_Types", foreignKey: "fk_exp1_air_cavity_upper_height_iid"});
  ATL_HK_TM_Type.belongsTo(INT32_Type, { as: "snapshot_time_secs", foreignKey: "fk_snapshot_time_secs_iid"});
  INT32_Type.hasMany(ATL_HK_TM_Type, { as: "ATL_HK_TM_Types", foreignKey: "fk_snapshot_time_secs_iid"});
  ATL_SC_TM_Type.belongsTo(INT32_Type, { as: "snapshot_time_secs", foreignKey: "fk_snapshot_time_secs_iid"});
  INT32_Type.hasMany(ATL_SC_TM_Type, { as: "ATL_SC_TM_Types", foreignKey: "fk_snapshot_time_secs_iid"});
  Absolute_Time_Type.belongsTo(INT32_Type, { as: "secs", foreignKey: "fk_secs_iid"});
  INT32_Type.hasMany(Absolute_Time_Type, { as: "Absolute_Time_Types", foreignKey: "fk_secs_iid"});
  Absolute_Time_Type.belongsTo(INT32_Type, { as: "usecs", foreignKey: "fk_usecs_iid"});
  INT32_Type.hasMany(Absolute_Time_Type, { as: "usecs_i_Absolute_Time_Types", foreignKey: "fk_usecs_iid"});
  EL_HK_TM_Type.belongsTo(INT32_Type, { as: "snapshot_time_secs", foreignKey: "fk_snapshot_time_secs_iid"});
  INT32_Type.hasMany(EL_HK_TM_Type, { as: "EL_HK_TM_Types", foreignKey: "fk_snapshot_time_secs_iid"});
  EL_SC_TM_Type.belongsTo(INT32_Type, { as: "snapshot_time_secs", foreignKey: "fk_snapshot_time_secs_iid"});
  INT32_Type.hasMany(EL_SC_TM_Type, { as: "EL_SC_TM_Types", foreignKey: "fk_snapshot_time_secs_iid"});
  GPS_Data.belongsTo(INT32_Type, { as: "time_secs", foreignKey: "fk_time_secs_iid"});
  INT32_Type.hasMany(GPS_Data, { as: "GPS_Data", foreignKey: "fk_time_secs_iid"});
  GPS_Data.belongsTo(INT32_Type, { as: "time_nsecs", foreignKey: "fk_time_nsecs_iid"});
  INT32_Type.hasMany(GPS_Data, { as: "time_nsecs_i_GPS_Data", foreignKey: "fk_time_nsecs_iid"});
  HK_TM_Type.belongsTo(INT32_Type, { as: "timestamp_secs", foreignKey: "fk_timestamp_secs_iid"});
  INT32_Type.hasMany(HK_TM_Type, { as: "HK_TM_Types", foreignKey: "fk_timestamp_secs_iid"});
  HTL_SC_TM_Type.belongsTo(INT32_Type, { as: "snapshot_time_secs", foreignKey: "fk_snapshot_time_secs_iid"});
  INT32_Type.hasMany(HTL_SC_TM_Type, { as: "HTL_SC_TM_Types", foreignKey: "fk_snapshot_time_secs_iid"});
  NADS_SC_TM_Type.belongsTo(INT32_Type, { as: "snapshot_time_secs", foreignKey: "fk_snapshot_time_secs_iid"});
  INT32_Type.hasMany(NADS_SC_TM_Type, { as: "NADS_SC_TM_Types", foreignKey: "fk_snapshot_time_secs_iid"});
  PCU_HK_TM_Type.belongsTo(INT32_Type, { as: "snapshot_time_secs", foreignKey: "fk_snapshot_time_secs_iid"});
  INT32_Type.hasMany(PCU_HK_TM_Type, { as: "PCU_HK_TM_Types", foreignKey: "fk_snapshot_time_secs_iid"});
  SC_TM_Type.belongsTo(INT32_Type, { as: "timestamp_secs", foreignKey: "fk_timestamp_secs_iid"});
  INT32_Type.hasMany(SC_TM_Type, { as: "SC_TM_Types", foreignKey: "fk_timestamp_secs_iid"});
  IMU_Temperatures.belongsTo(INT8_Type, { as: "temperature_accel", foreignKey: "fk_temperature_accel_iid"});
  INT8_Type.hasMany(IMU_Temperatures, { as: "IMU_Temperatures", foreignKey: "fk_temperature_accel_iid"});
  IMU_Temperatures.belongsTo(INT8_Type, { as: "temperature_gyro", foreignKey: "fk_temperature_gyro_iid"});
  INT8_Type.hasMany(IMU_Temperatures, { as: "temperature_gyro_i_IMU_Temperatures", foreignKey: "fk_temperature_gyro_iid"});
  PCU_Data_payload_sensor_data.belongsTo(INT8_Type, { as: "digital_temperature", foreignKey: "fk_digital_temperature_iid"});
  INT8_Type.hasMany(PCU_Data_payload_sensor_data, { as: "PCU_Data_payload_sensor_data", foreignKey: "fk_digital_temperature_iid"});
  PCU_HK_TM_Type.belongsTo(INT8_Type, { as: "temperature", foreignKey: "fk_temperature_iid"});
  INT8_Type.hasMany(PCU_HK_TM_Type, { as: "PCU_HK_TM_Types", foreignKey: "fk_temperature_iid"});
  DP_Data.belongsTo(NADS_Data, { as: "nad", foreignKey: "fk_nad_iid"});
  NADS_Data.hasMany(DP_Data, { as: "DP_Data", foreignKey: "fk_nad_iid"});
  NADS_Data.belongsTo(NADS_Data_payload, { as: "payload", foreignKey: "fk_payload_iid"});
  NADS_Data_payload.hasMany(NADS_Data, { as: "NADS_Data", foreignKey: "fk_payload_iid"});
  NADS_Data.belongsTo(NADS_Mode, { as: "mode", foreignKey: "fk_mode_iid"});
  NADS_Mode.hasMany(NADS_Data, { as: "NADS_Data", foreignKey: "fk_mode_iid"});
  SC_TM_Type_payload.belongsTo(NADS_SC_TM_Type, { as: "nads", foreignKey: "fk_nads_iid"});
  NADS_SC_TM_Type.hasMany(SC_TM_Type_payload, { as: "SC_TM_Type_payloads", foreignKey: "fk_nads_iid"});
  IMU_Calibration_Commands.belongsTo(Null_Type, { as: "restart_imu", foreignKey: "fk_restart_imu_iid"});
  Null_Type.hasMany(IMU_Calibration_Commands, { as: "IMU_Calibration_Commands", foreignKey: "fk_restart_imu_iid"});
  DP_Data.belongsTo(PCU_Data, { as: "pcu", foreignKey: "fk_pcu_iid"});
  PCU_Data.hasMany(DP_Data, { as: "DP_Data", foreignKey: "fk_pcu_iid"});
  PCU_Data.belongsTo(PCU_Data_payload, { as: "payload", foreignKey: "fk_payload_iid"});
  PCU_Data_payload.hasMany(PCU_Data, { as: "PCU_Data", foreignKey: "fk_payload_iid"});
  PCU_Data_payload.belongsTo(PCU_Data_payload_sensor_data, { as: "sensor_data", foreignKey: "fk_sensor_data_iid"});
  PCU_Data_payload_sensor_data.hasMany(PCU_Data_payload, { as: "PCU_Data_payloads", foreignKey: "fk_sensor_data_iid"});
  HK_TM_Type_payload.belongsTo(PCU_HK_TM_Type, { as: "pcu_hk", foreignKey: "fk_pcu_hk_iid"});
  PCU_HK_TM_Type.hasMany(HK_TM_Type_payload, { as: "HK_TM_Type_payloads", foreignKey: "fk_pcu_hk_iid"});
  PCU_Data.belongsTo(PCU_Mode, { as: "mode", foreignKey: "fk_mode_iid"});
  PCU_Mode.hasMany(PCU_Data, { as: "PCU_Data", foreignKey: "fk_mode_iid"});
  PCU_Data_payload.belongsTo(PCU_PS_Lines_Status, { as: "switches", foreignKey: "fk_switches_iid"});
  PCU_PS_Lines_Status.hasMany(PCU_Data_payload, { as: "PCU_Data_payloads", foreignKey: "fk_switches_iid"});
  PCU_HK_TM_Type.belongsTo(PCU_PS_Lines_Status, { as: "switches", foreignKey: "fk_switches_iid"});
  PCU_PS_Lines_Status.hasMany(PCU_HK_TM_Type, { as: "PCU_HK_TM_Types", foreignKey: "fk_switches_iid"});
  IMU_Fusion_Data.belongsTo(Quaternion_Data, { as: "quaternion_orientation", foreignKey: "fk_quaternion_orientation_iid"});
  Quaternion_Data.hasMany(IMU_Fusion_Data, { as: "IMU_Fusion_Data", foreignKey: "fk_quaternion_orientation_iid"});
  TC_Restart_Device.belongsTo(Restartable_Device_ID, { as: "device_id", foreignKey: "fk_device_id_iid"});
  Restartable_Device_ID.hasMany(TC_Restart_Device, { as: "TC_Restart_Devices", foreignKey: "fk_device_id_iid"});
  TM_Type.belongsTo(SC_TM_Type, { as: "scientific_tm", foreignKey: "fk_scientific_tm_iid"});
  SC_TM_Type.hasMany(TM_Type, { as: "TM_Types", foreignKey: "fk_scientific_tm_iid"});
  SC_TM_Type.belongsTo(SC_TM_Type_payload, { as: "payload", foreignKey: "fk_payload_iid"});
  SC_TM_Type_payload.hasMany(SC_TM_Type, { as: "SC_TM_Types", foreignKey: "fk_payload_iid"});
  EL_HK_TM_Type.belongsTo(Switch_Status, { as: "upwards_heater_status", foreignKey: "fk_upwards_heater_status_iid"});
  Switch_Status.hasMany(EL_HK_TM_Type, { as: "EL_HK_TM_Types", foreignKey: "fk_upwards_heater_status_iid"});
  EL_HK_TM_Type.belongsTo(Switch_Status, { as: "downwards_heater_status", foreignKey: "fk_downwards_heater_status_iid"});
  Switch_Status.hasMany(EL_HK_TM_Type, { as: "downwards_heater_status_i_EL_HK_TM_Types", foreignKey: "fk_downwards_heater_status_iid"});
  EnvLab_Experiment_Data.belongsTo(Switch_Status, { as: "heater", foreignKey: "fk_heater_iid"});
  Switch_Status.hasMany(EnvLab_Experiment_Data, { as: "EnvLab_Experiment_Data", foreignKey: "fk_heater_iid"});
  PCU_PS_Lines_Status.belongsTo(Switch_Status, { as: "al_line", foreignKey: "fk_al_line_iid"});
  Switch_Status.hasMany(PCU_PS_Lines_Status, { as: "PCU_PS_Lines_Statuses", foreignKey: "fk_al_line_iid"});
  PCU_PS_Lines_Status.belongsTo(Switch_Status, { as: "tmu_line", foreignKey: "fk_tmu_line_iid"});
  Switch_Status.hasMany(PCU_PS_Lines_Status, { as: "tmu_line_i_PCU_PS_Lines_Statuses", foreignKey: "fk_tmu_line_iid"});
  PCU_PS_Lines_Status.belongsTo(Switch_Status, { as: "sdpu_line", foreignKey: "fk_sdpu_line_iid"});
  Switch_Status.hasMany(PCU_PS_Lines_Status, { as: "sdpu_line_i_PCU_PS_Lines_Statuses", foreignKey: "fk_sdpu_line_iid"});
  TC_Type.belongsTo(TC_Change_Balloon_Mode, { as: "change_balloon_mode", foreignKey: "fk_change_balloon_mode_iid"});
  TC_Change_Balloon_Mode.hasMany(TC_Type, { as: "TC_Types", foreignKey: "fk_change_balloon_mode_iid"});
  TC_Type.belongsTo(TC_Change_TM_Mode, { as: "change_tm_mode", foreignKey: "fk_change_tm_mode_iid"});
  TC_Change_TM_Mode.hasMany(TC_Type, { as: "TC_Types", foreignKey: "fk_change_tm_mode_iid"});
  TC_Type.belongsTo(TC_Control_Experiment_Heater, { as: "control_experiment_heater", foreignKey: "fk_control_experiment_heater_iid"});
  TC_Control_Experiment_Heater.hasMany(TC_Type, { as: "TC_Types", foreignKey: "fk_control_experiment_heater_iid"});
  TC_Type.belongsTo(TC_Restart_Device, { as: "restart_device", foreignKey: "fk_restart_device_iid"});
  TC_Restart_Device.hasMany(TC_Type, { as: "TC_Types", foreignKey: "fk_restart_device_iid"});
  TC_Type.belongsTo(TC_Start_Manual_Control, { as: "start_manual_control", foreignKey: "fk_start_manual_control_iid"});
  TC_Start_Manual_Control.hasMany(TC_Type, { as: "TC_Types", foreignKey: "fk_start_manual_control_iid"});
  TC_Type.belongsTo(TC_Stop_Manual_Control, { as: "stop_manual_control", foreignKey: "fk_stop_manual_control_iid"});
  TC_Stop_Manual_Control.hasMany(TC_Type, { as: "TC_Types", foreignKey: "fk_stop_manual_control_iid"});
  TC_Change_TM_Mode.belongsTo(TMTC_Mode, { as: "new_mode", foreignKey: "fk_new_mode_iid"});
  TMTC_Mode.hasMany(TC_Change_TM_Mode, { as: "TC_Change_TM_Modes", foreignKey: "fk_new_mode_iid"});
  IMU_Parameters_calibration_parameters.belongsTo(TaStE_Calibration_complete_type, { as: "calibration_complete", foreignKey: "fk_calibration_complete_iid"});
  TaStE_Calibration_complete_type.hasMany(IMU_Parameters_calibration_parameters, { as: "IMU_Parameters_calibration_parameters", foreignKey: "fk_calibration_complete_iid"});
  HK_TM_Type.belongsTo(UINT32_Type, { as: "sequence_number", foreignKey: "fk_sequence_number_iid"});
  UINT32_Type.hasMany(HK_TM_Type, { as: "HK_TM_Types", foreignKey: "fk_sequence_number_iid"});
  SC_TM_Type.belongsTo(UINT32_Type, { as: "sequence_number", foreignKey: "fk_sequence_number_iid"});
  UINT32_Type.hasMany(SC_TM_Type, { as: "SC_TM_Types", foreignKey: "fk_sequence_number_iid"});

  return {
    ATL_HK_TM_Type,
    ATL_HK_TM_Type_temperatures,
    ATL_HK_TM_Type_temperatures_indexes,
    ATL_SC_TM_Type,
    ATL_SC_TM_Type_photodiodes,
    ATL_SC_TM_Type_photodiodes_indexes,
    Absolute_Barometer,
    Absolute_Time_Type,
    Actuator_Control_Mode,
    Analogue_Raw_Data,
    Att_Lab_Data,
    Att_Lab_Data_Measurements,
    Att_Lab_Data_Measurements_photodiodes,
    Att_Lab_Data_Measurements_photodiodes_indexes,
    Att_Lab_Data_Measurements_thermistors,
    Att_Lab_Data_Measurements_thermistors_indexes,
    Att_Lab_Mode,
    Axis_Data,
    Balloon_Events,
    Balloon_Mode,
    Boolean_Type,
    CHARSTR_VARIABLE_LEN,
    DP_Data,
    Dummy_Type,
    Duty_Cycle_Type,
    EL_HK_TM_Type,
    EL_SC_TM_Type,
    EL_SC_TM_Type_dif_barometers,
    EL_SC_TM_Type_dif_barometers_indexes,
    EnvLab_Data,
    EnvLab_Data_payload,
    EnvLab_Experiment_Data,
    EnvLab_Experiment_Data_Sensors,
    EnvLab_Heater_ID,
    EnvLab_Pressure_Data,
    EnvLab_Pressure_Data_abs_barometers,
    EnvLab_Pressure_Data_abs_barometers_indexes,
    EnvLab_Pressure_Data_dif_barometers,
    EnvLab_Pressure_Data_dif_barometers_indexes,
    Env_Lab_Heaters_Mode,
    Env_Lab_Mode,
    Env_Lab_Mode_mode,
    Epoch_Type,
    FLOAT32_Type,
    FLOAT64_Type,
    GPS_Data,
    HK_TM_Type,
    HK_TM_Type_payload,
    HTL_Data,
    HTL_Data_payload,
    HTL_Data_payload_heaters,
    HTL_Data_payload_heaters_indexes,
    HTL_Data_payload_thermistors,
    HTL_Data_payload_thermistors_indexes,
    HTL_Heater_ID,
    HTL_Heaters_Mode,
    HTL_Mode,
    HTL_Mode_mode,
    HTL_SC_TM_Type,
    HTL_SC_TM_Type_heaters,
    HTL_SC_TM_Type_heaters_indexes,
    Heater_ID,
    Heater_Power_Type,
    IMU_AxesConfiguration,
    IMU_AxisSelection,
    IMU_AxisSelection_remap,
    IMU_AxisSelection_sign,
    IMU_CalibrationLevel,
    IMU_CalibrationOffsets,
    IMU_Calibration_Commands,
    IMU_Data,
    IMU_Fusion_Data,
    IMU_OperatingMode,
    IMU_Parameters,
    IMU_Parameters_calibration_parameters,
    IMU_Parameters_calibration_parameters_calibration_states,
    IMU_Sensors_Data,
    IMU_Temperatures,
    INT16_Type,
    INT32_Type,
    INT64_Type,
    INT8_Type,
    NADS_Data,
    NADS_Data_payload,
    NADS_Mode,
    NADS_SC_TM_Type,
    Null_Type,
    OCTSTR_VARIABLE_LEN,
    PCU_Data,
    PCU_Data_payload,
    PCU_Data_payload_sensor_data,
    PCU_HK_TM_Type,
    PCU_Mode,
    PCU_PS_Lines_Status,
    PID,
    PID_Range,
    Power_Supply_Line_ID,
    Quaternion_Data,
    Relative_Time_Type,
    Restartable_Device_ID,
    SC_TM_Type,
    SC_TM_Type_payload,
    Switch_Status,
    TC_Change_Balloon_Mode,
    TC_Change_TM_Mode,
    TC_Control_Experiment_Heater,
    TC_Restart_Device,
    TC_Start_Manual_Control,
    TC_Stop_Manual_Control,
    TC_Type,
    TMTC_Mode,
    TM_Type,
    T_Boolean,
    T_Int32,
    T_Int8,
    T_Null_Record,
    T_UInt32,
    T_UInt8,
    TaStE_Calibration_complete_type,
    UINT16_Type,
    UINT32_Type,
    UINT64_Type,
    UINT8_Type,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
