const DataTypes = require("sequelize").DataTypes;
const _ATL_HK_TM_Type = require("./ATL_HK_TM_Type");
const _ATL_HK_TM_Type_temperatures = require("./ATL_HK_TM_Type_temperatures");
const _ATL_HK_TM_Type_temperatures_indexes = require("./ATL_HK_TM_Type_temperatures_indexes");
const _ATL_SC_TM_Type = require("./ATL_SC_TM_Type");
const _ATL_SC_TM_Type_photodiodes = require("./ATL_SC_TM_Type_photodiodes");
const _ATL_SC_TM_Type_photodiodes_indexes = require("./ATL_SC_TM_Type_photodiodes_indexes");
const _Absolute_Barometer = require("./Absolute_Barometer");
const _Absolute_Time_Type = require("./Absolute_Time_Type");
const _Actuator_Control_Mode = require("./Actuator_Control_Mode");
const _Analogue_Raw_Data = require("./Analogue_Raw_Data");
const _Att_Lab_Data = require("./Att_Lab_Data");
const _Att_Lab_Data_Measurements = require("./Att_Lab_Data_Measurements");
const _Att_Lab_Data_Measurements_photodiodes = require("./Att_Lab_Data_Measurements_photodiodes");
const _Att_Lab_Data_Measurements_photodiodes_indexes = require("./Att_Lab_Data_Measurements_photodiodes_indexes");
const _Att_Lab_Data_Measurements_thermistors = require("./Att_Lab_Data_Measurements_thermistors");
const _Att_Lab_Data_Measurements_thermistors_indexes = require("./Att_Lab_Data_Measurements_thermistors_indexes");
const _Att_Lab_Mode = require("./Att_Lab_Mode");
const _Axis_Data = require("./Axis_Data");
const _Balloon_Events = require("./Balloon_Events");
const _Balloon_Mode = require("./Balloon_Mode");
const _Boolean_Type = require("./Boolean_Type");
const _CHARSTR_VARIABLE_LEN = require("./CHARSTR_VARIABLE_LEN");
const _DP_Data = require("./DP_Data");
const _Dummy_Type = require("./Dummy_Type");
const _Duty_Cycle_Type = require("./Duty_Cycle_Type");
const _EL_HK_TM_Type = require("./EL_HK_TM_Type");
const _EL_SC_TM_Type = require("./EL_SC_TM_Type");
const _EL_SC_TM_Type_dif_barometers = require("./EL_SC_TM_Type_dif_barometers");
const _EL_SC_TM_Type_dif_barometers_indexes = require("./EL_SC_TM_Type_dif_barometers_indexes");
const _EnvLab_Data = require("./EnvLab_Data");
const _EnvLab_Data_payload = require("./EnvLab_Data_payload");
const _EnvLab_Experiment_Data = require("./EnvLab_Experiment_Data");
const _EnvLab_Experiment_Data_Sensors = require("./EnvLab_Experiment_Data_Sensors");
const _EnvLab_Heater_ID = require("./EnvLab_Heater_ID");
const _EnvLab_Pressure_Data = require("./EnvLab_Pressure_Data");
const _EnvLab_Pressure_Data_abs_barometers = require("./EnvLab_Pressure_Data_abs_barometers");
const _EnvLab_Pressure_Data_abs_barometers_indexes = require("./EnvLab_Pressure_Data_abs_barometers_indexes");
const _EnvLab_Pressure_Data_dif_barometers = require("./EnvLab_Pressure_Data_dif_barometers");
const _EnvLab_Pressure_Data_dif_barometers_indexes = require("./EnvLab_Pressure_Data_dif_barometers_indexes");
const _Env_Lab_Heaters_Mode = require("./Env_Lab_Heaters_Mode");
const _Env_Lab_Mode = require("./Env_Lab_Mode");
const _Env_Lab_Mode_mode = require("./Env_Lab_Mode_mode");
const _Epoch_Type = require("./Epoch_Type");
const _FLOAT32_Type = require("./FLOAT32_Type");
const _FLOAT64_Type = require("./FLOAT64_Type");
const _GPS_Data = require("./GPS_Data");
const _HK_TM_Type = require("./HK_TM_Type");
const _HK_TM_Type_payload = require("./HK_TM_Type_payload");
const _HTL_Data = require("./HTL_Data");
const _HTL_Data_payload = require("./HTL_Data_payload");
const _HTL_Data_payload_heaters = require("./HTL_Data_payload_heaters");
const _HTL_Data_payload_heaters_indexes = require("./HTL_Data_payload_heaters_indexes");
const _HTL_Data_payload_thermistors = require("./HTL_Data_payload_thermistors");
const _HTL_Data_payload_thermistors_indexes = require("./HTL_Data_payload_thermistors_indexes");
const _HTL_Heater_ID = require("./HTL_Heater_ID");
const _HTL_Heaters_Mode = require("./HTL_Heaters_Mode");
const _HTL_Mode = require("./HTL_Mode");
const _HTL_Mode_mode = require("./HTL_Mode_mode");
const _HTL_SC_TM_Type = require("./HTL_SC_TM_Type");
const _HTL_SC_TM_Type_heaters = require("./HTL_SC_TM_Type_heaters");
const _HTL_SC_TM_Type_heaters_indexes = require("./HTL_SC_TM_Type_heaters_indexes");
const _Heater_ID = require("./Heater_ID");
const _Heater_Power_Type = require("./Heater_Power_Type");
const _IMU_AxesConfiguration = require("./IMU_AxesConfiguration");
const _IMU_AxisSelection = require("./IMU_AxisSelection");
const _IMU_AxisSelection_remap = require("./IMU_AxisSelection_remap");
const _IMU_AxisSelection_sign = require("./IMU_AxisSelection_sign");
const _IMU_CalibrationLevel = require("./IMU_CalibrationLevel");
const _IMU_CalibrationOffsets = require("./IMU_CalibrationOffsets");
const _IMU_Calibration_Commands = require("./IMU_Calibration_Commands");
const _IMU_Data = require("./IMU_Data");
const _IMU_Fusion_Data = require("./IMU_Fusion_Data");
const _IMU_OperatingMode = require("./IMU_OperatingMode");
const _IMU_Parameters = require("./IMU_Parameters");
const _IMU_Parameters_calibration_parameters = require("./IMU_Parameters_calibration_parameters");
const _IMU_Parameters_calibration_parameters_calibration_states = require("./IMU_Parameters_calibration_parameters_calibration_states");
const _IMU_Sensors_Data = require("./IMU_Sensors_Data");
const _IMU_Temperatures = require("./IMU_Temperatures");
const _INT16_Type = require("./INT16_Type");
const _INT32_Type = require("./INT32_Type");
const _INT64_Type = require("./INT64_Type");
const _INT8_Type = require("./INT8_Type");
const _NADS_Data = require("./NADS_Data");
const _NADS_Data_payload = require("./NADS_Data_payload");
const _NADS_Mode = require("./NADS_Mode");
const _NADS_SC_TM_Type = require("./NADS_SC_TM_Type");
const _Null_Type = require("./Null_Type");
const _OCTSTR_VARIABLE_LEN = require("./OCTSTR_VARIABLE_LEN");
const _PCU_Data = require("./PCU_Data");
const _PCU_Data_payload = require("./PCU_Data_payload");
const _PCU_Data_payload_sensor_data = require("./PCU_Data_payload_sensor_data");
const _PCU_HK_TM_Type = require("./PCU_HK_TM_Type");
const _PCU_Mode = require("./PCU_Mode");
const _PCU_PS_Lines_Status = require("./PCU_PS_Lines_Status");
const _PID = require("./PID");
const _PID_Range = require("./PID_Range");
const _Power_Supply_Line_ID = require("./Power_Supply_Line_ID");
const _Quaternion_Data = require("./Quaternion_Data");
const _Relative_Time_Type = require("./Relative_Time_Type");
const _Restartable_Device_ID = require("./Restartable_Device_ID");
const _SC_TM_Type = require("./SC_TM_Type");
const _SC_TM_Type_payload = require("./SC_TM_Type_payload");
const _Switch_Status = require("./Switch_Status");
const _TC_Change_Balloon_Mode = require("./TC_Change_Balloon_Mode");
const _TC_Change_TM_Mode = require("./TC_Change_TM_Mode");
const _TC_Control_Experiment_Heater = require("./TC_Control_Experiment_Heater");
const _TC_Restart_Device = require("./TC_Restart_Device");
const _TC_Start_Manual_Control = require("./TC_Start_Manual_Control");
const _TC_Stop_Manual_Control = require("./TC_Stop_Manual_Control");
const _TC_Type = require("./TC_Type");
const _TC_Type_Sent = require("./TC_Type_Sent");
const _TMTC_Mode = require("./TMTC_Mode");
const _TM_Type = require("./TM_Type");
const _T_Boolean = require("./T_Boolean");
const _T_Int32 = require("./T_Int32");
const _T_Int8 = require("./T_Int8");
const _T_Null_Record = require("./T_Null_Record");
const _T_UInt32 = require("./T_UInt32");
const _T_UInt8 = require("./T_UInt8");
const _TaStE_Calibration_complete_type = require("./TaStE_Calibration_complete_type");
const _UINT16_Type = require("./UINT16_Type");
const _UINT32_Type = require("./UINT32_Type");
const _UINT64_Type = require("./UINT64_Type");
const _UINT8_Type = require("./UINT8_Type");

function initModels(sequelize) {
  const ATL_HK_TM_Type = _ATL_HK_TM_Type(sequelize, DataTypes);
  const ATL_HK_TM_Type_temperatures = _ATL_HK_TM_Type_temperatures(sequelize, DataTypes);
  const ATL_HK_TM_Type_temperatures_indexes = _ATL_HK_TM_Type_temperatures_indexes(sequelize, DataTypes);
  const ATL_SC_TM_Type = _ATL_SC_TM_Type(sequelize, DataTypes);
  const ATL_SC_TM_Type_photodiodes = _ATL_SC_TM_Type_photodiodes(sequelize, DataTypes);
  const ATL_SC_TM_Type_photodiodes_indexes = _ATL_SC_TM_Type_photodiodes_indexes(sequelize, DataTypes);
  const Absolute_Barometer = _Absolute_Barometer(sequelize, DataTypes);
  const Absolute_Time_Type = _Absolute_Time_Type(sequelize, DataTypes);
  const Actuator_Control_Mode = _Actuator_Control_Mode(sequelize, DataTypes);
  const Analogue_Raw_Data = _Analogue_Raw_Data(sequelize, DataTypes);
  const Att_Lab_Data = _Att_Lab_Data(sequelize, DataTypes);
  const Att_Lab_Data_Measurements = _Att_Lab_Data_Measurements(sequelize, DataTypes);
  const Att_Lab_Data_Measurements_photodiodes = _Att_Lab_Data_Measurements_photodiodes(sequelize, DataTypes);
  const Att_Lab_Data_Measurements_photodiodes_indexes = _Att_Lab_Data_Measurements_photodiodes_indexes(sequelize, DataTypes);
  const Att_Lab_Data_Measurements_thermistors = _Att_Lab_Data_Measurements_thermistors(sequelize, DataTypes);
  const Att_Lab_Data_Measurements_thermistors_indexes = _Att_Lab_Data_Measurements_thermistors_indexes(sequelize, DataTypes);
  const Att_Lab_Mode = _Att_Lab_Mode(sequelize, DataTypes);
  const Axis_Data = _Axis_Data(sequelize, DataTypes);
  const Balloon_Events = _Balloon_Events(sequelize, DataTypes);
  const Balloon_Mode = _Balloon_Mode(sequelize, DataTypes);
  const Boolean_Type = _Boolean_Type(sequelize, DataTypes);
  const CHARSTR_VARIABLE_LEN = _CHARSTR_VARIABLE_LEN(sequelize, DataTypes);
  const DP_Data = _DP_Data(sequelize, DataTypes);
  const Dummy_Type = _Dummy_Type(sequelize, DataTypes);
  const Duty_Cycle_Type = _Duty_Cycle_Type(sequelize, DataTypes);
  const EL_HK_TM_Type = _EL_HK_TM_Type(sequelize, DataTypes);
  const EL_SC_TM_Type = _EL_SC_TM_Type(sequelize, DataTypes);
  const EL_SC_TM_Type_dif_barometers = _EL_SC_TM_Type_dif_barometers(sequelize, DataTypes);
  const EL_SC_TM_Type_dif_barometers_indexes = _EL_SC_TM_Type_dif_barometers_indexes(sequelize, DataTypes);
  const EnvLab_Data = _EnvLab_Data(sequelize, DataTypes);
  const EnvLab_Data_payload = _EnvLab_Data_payload(sequelize, DataTypes);
  const EnvLab_Experiment_Data = _EnvLab_Experiment_Data(sequelize, DataTypes);
  const EnvLab_Experiment_Data_Sensors = _EnvLab_Experiment_Data_Sensors(sequelize, DataTypes);
  const EnvLab_Heater_ID = _EnvLab_Heater_ID(sequelize, DataTypes);
  const EnvLab_Pressure_Data = _EnvLab_Pressure_Data(sequelize, DataTypes);
  const EnvLab_Pressure_Data_abs_barometers = _EnvLab_Pressure_Data_abs_barometers(sequelize, DataTypes);
  const EnvLab_Pressure_Data_abs_barometers_indexes = _EnvLab_Pressure_Data_abs_barometers_indexes(sequelize, DataTypes);
  const EnvLab_Pressure_Data_dif_barometers = _EnvLab_Pressure_Data_dif_barometers(sequelize, DataTypes);
  const EnvLab_Pressure_Data_dif_barometers_indexes = _EnvLab_Pressure_Data_dif_barometers_indexes(sequelize, DataTypes);
  const Env_Lab_Heaters_Mode = _Env_Lab_Heaters_Mode(sequelize, DataTypes);
  const Env_Lab_Mode = _Env_Lab_Mode(sequelize, DataTypes);
  const Env_Lab_Mode_mode = _Env_Lab_Mode_mode(sequelize, DataTypes);
  const Epoch_Type = _Epoch_Type(sequelize, DataTypes);
  const FLOAT32_Type = _FLOAT32_Type(sequelize, DataTypes);
  const FLOAT64_Type = _FLOAT64_Type(sequelize, DataTypes);
  const GPS_Data = _GPS_Data(sequelize, DataTypes);
  const HK_TM_Type = _HK_TM_Type(sequelize, DataTypes);
  const HK_TM_Type_payload = _HK_TM_Type_payload(sequelize, DataTypes);
  const HTL_Data = _HTL_Data(sequelize, DataTypes);
  const HTL_Data_payload = _HTL_Data_payload(sequelize, DataTypes);
  const HTL_Data_payload_heaters = _HTL_Data_payload_heaters(sequelize, DataTypes);
  const HTL_Data_payload_heaters_indexes = _HTL_Data_payload_heaters_indexes(sequelize, DataTypes);
  const HTL_Data_payload_thermistors = _HTL_Data_payload_thermistors(sequelize, DataTypes);
  const HTL_Data_payload_thermistors_indexes = _HTL_Data_payload_thermistors_indexes(sequelize, DataTypes);
  const HTL_Heater_ID = _HTL_Heater_ID(sequelize, DataTypes);
  const HTL_Heaters_Mode = _HTL_Heaters_Mode(sequelize, DataTypes);
  const HTL_Mode = _HTL_Mode(sequelize, DataTypes);
  const HTL_Mode_mode = _HTL_Mode_mode(sequelize, DataTypes);
  const HTL_SC_TM_Type = _HTL_SC_TM_Type(sequelize, DataTypes);
  const HTL_SC_TM_Type_heaters = _HTL_SC_TM_Type_heaters(sequelize, DataTypes);
  const HTL_SC_TM_Type_heaters_indexes = _HTL_SC_TM_Type_heaters_indexes(sequelize, DataTypes);
  const Heater_ID = _Heater_ID(sequelize, DataTypes);
  const Heater_Power_Type = _Heater_Power_Type(sequelize, DataTypes);
  const IMU_AxesConfiguration = _IMU_AxesConfiguration(sequelize, DataTypes);
  const IMU_AxisSelection = _IMU_AxisSelection(sequelize, DataTypes);
  const IMU_AxisSelection_remap = _IMU_AxisSelection_remap(sequelize, DataTypes);
  const IMU_AxisSelection_sign = _IMU_AxisSelection_sign(sequelize, DataTypes);
  const IMU_CalibrationLevel = _IMU_CalibrationLevel(sequelize, DataTypes);
  const IMU_CalibrationOffsets = _IMU_CalibrationOffsets(sequelize, DataTypes);
  const IMU_Calibration_Commands = _IMU_Calibration_Commands(sequelize, DataTypes);
  const IMU_Data = _IMU_Data(sequelize, DataTypes);
  const IMU_Fusion_Data = _IMU_Fusion_Data(sequelize, DataTypes);
  const IMU_OperatingMode = _IMU_OperatingMode(sequelize, DataTypes);
  const IMU_Parameters = _IMU_Parameters(sequelize, DataTypes);
  const IMU_Parameters_calibration_parameters = _IMU_Parameters_calibration_parameters(sequelize, DataTypes);
  const IMU_Parameters_calibration_parameters_calibration_states = _IMU_Parameters_calibration_parameters_calibration_states(sequelize, DataTypes);
  const IMU_Sensors_Data = _IMU_Sensors_Data(sequelize, DataTypes);
  const IMU_Temperatures = _IMU_Temperatures(sequelize, DataTypes);
  const INT16_Type = _INT16_Type(sequelize, DataTypes);
  const INT32_Type = _INT32_Type(sequelize, DataTypes);
  const INT64_Type = _INT64_Type(sequelize, DataTypes);
  const INT8_Type = _INT8_Type(sequelize, DataTypes);
  const NADS_Data = _NADS_Data(sequelize, DataTypes);
  const NADS_Data_payload = _NADS_Data_payload(sequelize, DataTypes);
  const NADS_Mode = _NADS_Mode(sequelize, DataTypes);
  const NADS_SC_TM_Type = _NADS_SC_TM_Type(sequelize, DataTypes);
  const Null_Type = _Null_Type(sequelize, DataTypes);
  const OCTSTR_VARIABLE_LEN = _OCTSTR_VARIABLE_LEN(sequelize, DataTypes);
  const PCU_Data = _PCU_Data(sequelize, DataTypes);
  const PCU_Data_payload = _PCU_Data_payload(sequelize, DataTypes);
  const PCU_Data_payload_sensor_data = _PCU_Data_payload_sensor_data(sequelize, DataTypes);
  const PCU_HK_TM_Type = _PCU_HK_TM_Type(sequelize, DataTypes);
  const PCU_Mode = _PCU_Mode(sequelize, DataTypes);
  const PCU_PS_Lines_Status = _PCU_PS_Lines_Status(sequelize, DataTypes);
  const PID = _PID(sequelize, DataTypes);
  const PID_Range = _PID_Range(sequelize, DataTypes);
  const Power_Supply_Line_ID = _Power_Supply_Line_ID(sequelize, DataTypes);
  const Quaternion_Data = _Quaternion_Data(sequelize, DataTypes);
  const Relative_Time_Type = _Relative_Time_Type(sequelize, DataTypes);
  const Restartable_Device_ID = _Restartable_Device_ID(sequelize, DataTypes);
  const SC_TM_Type = _SC_TM_Type(sequelize, DataTypes);
  const SC_TM_Type_payload = _SC_TM_Type_payload(sequelize, DataTypes);
  const Switch_Status = _Switch_Status(sequelize, DataTypes);
  const TC_Change_Balloon_Mode = _TC_Change_Balloon_Mode(sequelize, DataTypes);
  const TC_Change_TM_Mode = _TC_Change_TM_Mode(sequelize, DataTypes);
  const TC_Control_Experiment_Heater = _TC_Control_Experiment_Heater(sequelize, DataTypes);
  const TC_Restart_Device = _TC_Restart_Device(sequelize, DataTypes);
  const TC_Start_Manual_Control = _TC_Start_Manual_Control(sequelize, DataTypes);
  const TC_Stop_Manual_Control = _TC_Stop_Manual_Control(sequelize, DataTypes);
  const TC_Type = _TC_Type(sequelize, DataTypes);
  const TC_Type_Sent = _TC_Type_Sent(sequelize, DataTypes);
  const TMTC_Mode = _TMTC_Mode(sequelize, DataTypes);
  const TM_Type = _TM_Type(sequelize, DataTypes);
  const T_Boolean = _T_Boolean(sequelize, DataTypes);
  const T_Int32 = _T_Int32(sequelize, DataTypes);
  const T_Int8 = _T_Int8(sequelize, DataTypes);
  const T_Null_Record = _T_Null_Record(sequelize, DataTypes);
  const T_UInt32 = _T_UInt32(sequelize, DataTypes);
  const T_UInt8 = _T_UInt8(sequelize, DataTypes);
  const TaStE_Calibration_complete_type = _TaStE_Calibration_complete_type(sequelize, DataTypes);
  const UINT16_Type = _UINT16_Type(sequelize, DataTypes);
  const UINT32_Type = _UINT32_Type(sequelize, DataTypes);
  const UINT64_Type = _UINT64_Type(sequelize, DataTypes);
  const UINT8_Type = _UINT8_Type(sequelize, DataTypes);

  HK_TM_Type_payload.belongsTo(ATL_HK_TM_Type, { as: "atl_hk", foreignKey: "fk_atl_hk_iid"});
  ATL_HK_TM_Type.belongsTo(ATL_HK_TM_Type_temperatures, { as: "temperatures", foreignKey: "fk_temperatures_iid"});
  ATL_HK_TM_Type_temperatures_indexes.belongsTo(ATL_HK_TM_Type_temperatures, { as: "ATL_HK_TM_Type_temperatures", foreignKey: "fk_ATL_HK_TM_Type_temperatures_iid"});
  SC_TM_Type_payload.belongsTo(ATL_SC_TM_Type, { as: "atl", foreignKey: "fk_atl_iid"});
  ATL_SC_TM_Type.belongsTo(ATL_SC_TM_Type_photodiodes, { as: "photodiodes", foreignKey: "fk_photodiodes_iid"});
  ATL_SC_TM_Type_photodiodes_indexes.belongsTo(ATL_SC_TM_Type_photodiodes, { as: "ATL_SC_TM_Type_photodiodes", foreignKey: "fk_ATL_SC_TM_Type_photodiodes_iid"});
  EnvLab_Pressure_Data_abs_barometers_indexes.belongsTo(Absolute_Barometer, { as: "Absolute_Barometer", foreignKey: "fk_Absolute_Barometer_iid"});
  Att_Lab_Data.belongsTo(Absolute_Time_Type, { as: "snapshot_time", foreignKey: "fk_snapshot_time_iid"});
  EnvLab_Data.belongsTo(Absolute_Time_Type, { as: "snapshot_time", foreignKey: "fk_snapshot_time_iid"});
  HTL_Data.belongsTo(Absolute_Time_Type, { as: "snapshot_time", foreignKey: "fk_snapshot_time_iid"});
  NADS_Data.belongsTo(Absolute_Time_Type, { as: "snapshot_time", foreignKey: "fk_snapshot_time_iid"});
  PCU_Data.belongsTo(Absolute_Time_Type, { as: "snapshot_time", foreignKey: "fk_snapshot_time_iid"});
  Env_Lab_Heaters_Mode.belongsTo(Actuator_Control_Mode, { as: "upwards", foreignKey: "fk_upwards_iid"});
  Env_Lab_Heaters_Mode.belongsTo(Actuator_Control_Mode, { as: "downwards", foreignKey: "fk_downwards_iid"});
  HTL_Heaters_Mode.belongsTo(Actuator_Control_Mode, { as: "experiment_1", foreignKey: "fk_experiment_1_iid"});
  HTL_Heaters_Mode.belongsTo(Actuator_Control_Mode, { as: "experiment_2", foreignKey: "fk_experiment_2_iid"});
  HTL_Heaters_Mode.belongsTo(Actuator_Control_Mode, { as: "experiment_3", foreignKey: "fk_experiment_3_iid"});
  HTL_Heaters_Mode.belongsTo(Actuator_Control_Mode, { as: "experiment_4", foreignKey: "fk_experiment_4_iid"});
  DP_Data.belongsTo(Att_Lab_Data, { as: "atl", foreignKey: "fk_atl_iid"});
  Att_Lab_Data.belongsTo(Att_Lab_Data_Measurements, { as: "payload", foreignKey: "fk_payload_iid"});
  Att_Lab_Data_Measurements.belongsTo(Att_Lab_Data_Measurements_photodiodes, { as: "photodiodes", foreignKey: "fk_photodiodes_iid"});
  Att_Lab_Data_Measurements_photodiodes_indexes.belongsTo(Att_Lab_Data_Measurements_photodiodes, { as: "Att_Lab_Data_Measurements_photodiodes", foreignKey: "fk_Att_Lab_Data_Measurements_photodiodes_iid"});
  Att_Lab_Data_Measurements.belongsTo(Att_Lab_Data_Measurements_thermistors, { as: "thermistors", foreignKey: "fk_thermistors_iid"});
  Att_Lab_Data_Measurements_thermistors_indexes.belongsTo(Att_Lab_Data_Measurements_thermistors, { as: "Att_Lab_Data_Measurements_thermistors", foreignKey: "fk_Att_Lab_Data_Measurements_thermistors_iid"});
  Att_Lab_Data.belongsTo(Att_Lab_Mode, { as: "mode", foreignKey: "fk_mode_iid"});
  IMU_Fusion_Data.belongsTo(Axis_Data, { as: "euler_orientation", foreignKey: "fk_euler_orientation_iid"});
  IMU_Fusion_Data.belongsTo(Axis_Data, { as: "liner_acceleration", foreignKey: "fk_liner_acceleration_iid"});
  IMU_Fusion_Data.belongsTo(Axis_Data, { as: "gravity", foreignKey: "fk_gravity_iid"});
  IMU_Sensors_Data.belongsTo(Axis_Data, { as: "acceleration", foreignKey: "fk_acceleration_iid"});
  IMU_Sensors_Data.belongsTo(Axis_Data, { as: "mag_field", foreignKey: "fk_mag_field_iid"});
  IMU_Sensors_Data.belongsTo(Axis_Data, { as: "angular_velocity", foreignKey: "fk_angular_velocity_iid"});
  HK_TM_Type.belongsTo(Balloon_Mode, { as: "balloon_mode", foreignKey: "fk_balloon_mode_iid"});
  SC_TM_Type.belongsTo(Balloon_Mode, { as: "balloon_mode", foreignKey: "fk_balloon_mode_iid"});
  TC_Change_Balloon_Mode.belongsTo(Balloon_Mode, { as: "new_mode", foreignKey: "fk_new_mode_iid"});
  HK_TM_Type_payload.belongsTo(EL_HK_TM_Type, { as: "el_hk", foreignKey: "fk_el_hk_iid"});
  SC_TM_Type_payload.belongsTo(EL_SC_TM_Type, { as: "el", foreignKey: "fk_el_iid"});
  EL_SC_TM_Type.belongsTo(EL_SC_TM_Type_dif_barometers, { as: "dif_barometers", foreignKey: "fk_dif_barometers_iid"});
  EL_SC_TM_Type_dif_barometers_indexes.belongsTo(EL_SC_TM_Type_dif_barometers, { as: "EL_SC_TM_Type_dif_barometers", foreignKey: "fk_EL_SC_TM_Type_dif_barometers_iid"});
  DP_Data.belongsTo(EnvLab_Data, { as: "enl", foreignKey: "fk_enl_iid"});
  EnvLab_Data.belongsTo(EnvLab_Data_payload, { as: "payload", foreignKey: "fk_payload_iid"});
  EnvLab_Data_payload.belongsTo(EnvLab_Experiment_Data, { as: "upwards", foreignKey: "fk_upwards_iid"});
  EnvLab_Data_payload.belongsTo(EnvLab_Experiment_Data, { as: "downwards", foreignKey: "fk_downwards_iid"});
  EnvLab_Experiment_Data.belongsTo(EnvLab_Experiment_Data_Sensors, { as: "analogue_data", foreignKey: "fk_analogue_data_iid"});
  EnvLab_Data_payload.belongsTo(EnvLab_Pressure_Data, { as: "pressure_data", foreignKey: "fk_pressure_data_iid"});
  EnvLab_Pressure_Data.belongsTo(EnvLab_Pressure_Data_abs_barometers, { as: "abs_barometers", foreignKey: "fk_abs_barometers_iid"});
  EnvLab_Pressure_Data_abs_barometers_indexes.belongsTo(EnvLab_Pressure_Data_abs_barometers, { as: "EnvLab_Pressure_Data_abs_barometers", foreignKey: "fk_EnvLab_Pressure_Data_abs_barometers_iid"});
  EnvLab_Pressure_Data.belongsTo(EnvLab_Pressure_Data_dif_barometers, { as: "dif_barometers", foreignKey: "fk_dif_barometers_iid"});
  EnvLab_Pressure_Data_dif_barometers_indexes.belongsTo(EnvLab_Pressure_Data_dif_barometers, { as: "EnvLab_Pressure_Data_dif_barometers", foreignKey: "fk_EnvLab_Pressure_Data_dif_barometers_iid"});
  Env_Lab_Mode.belongsTo(Env_Lab_Heaters_Mode, { as: "heaters_mode", foreignKey: "fk_heaters_mode_iid"});
  EnvLab_Data.belongsTo(Env_Lab_Mode, { as: "mode", foreignKey: "fk_mode_iid"});
  Env_Lab_Mode.belongsTo(Env_Lab_Mode_mode, { as: "mode", foreignKey: "fk_mode_iid"});
  Absolute_Barometer.belongsTo(FLOAT32_Type, { as: "pressure_mbar", foreignKey: "fk_pressure_mbar_iid"});
  Absolute_Barometer.belongsTo(FLOAT32_Type, { as: "temperature_celsius", foreignKey: "fk_temperature_celsius_iid"});
  Att_Lab_Data.belongsTo(FLOAT32_Type, { as: "mission_time", foreignKey: "fk_mission_time_iid"});
  Axis_Data.belongsTo(FLOAT32_Type, { as: "x", foreignKey: "fk_x_iid"});
  Axis_Data.belongsTo(FLOAT32_Type, { as: "y", foreignKey: "fk_y_iid"});
  Axis_Data.belongsTo(FLOAT32_Type, { as: "z", foreignKey: "fk_z_iid"});
  EL_HK_TM_Type.belongsTo(FLOAT32_Type, { as: "abs_pressure_mbar_1", foreignKey: "fk_abs_pressure_mbar_1_iid"});
  EL_HK_TM_Type.belongsTo(FLOAT32_Type, { as: "abs_pressure_mbar_2", foreignKey: "fk_abs_pressure_mbar_2_iid"});
  EnvLab_Data.belongsTo(FLOAT32_Type, { as: "mission_time", foreignKey: "fk_mission_time_iid"});
  GPS_Data.belongsTo(FLOAT32_Type, { as: "latitude_deg", foreignKey: "fk_latitude_deg_iid"});
  GPS_Data.belongsTo(FLOAT32_Type, { as: "longitude_deg", foreignKey: "fk_longitude_deg_iid"});
  GPS_Data.belongsTo(FLOAT32_Type, { as: "altitude_m", foreignKey: "fk_altitude_m_iid"});
  GPS_Data.belongsTo(FLOAT32_Type, { as: "sog_knots", foreignKey: "fk_sog_knots_iid"});
  GPS_Data.belongsTo(FLOAT32_Type, { as: "cog_deg", foreignKey: "fk_cog_deg_iid"});
  HTL_Data.belongsTo(FLOAT32_Type, { as: "mission_time", foreignKey: "fk_mission_time_iid"});
  IMU_CalibrationOffsets.belongsTo(FLOAT32_Type, { as: "accel_offset_x", foreignKey: "fk_accel_offset_x_iid"});
  IMU_CalibrationOffsets.belongsTo(FLOAT32_Type, { as: "accel_radius", foreignKey: "fk_accel_radius_iid"});
  IMU_CalibrationOffsets.belongsTo(FLOAT32_Type, { as: "mgm_radius", foreignKey: "fk_mgm_radius_iid"});
  IMU_CalibrationOffsets.belongsTo(FLOAT32_Type, { as: "accel_offset_y", foreignKey: "fk_accel_offset_y_iid"});
  IMU_CalibrationOffsets.belongsTo(FLOAT32_Type, { as: "accel_offset_z", foreignKey: "fk_accel_offset_z_iid"});
  IMU_CalibrationOffsets.belongsTo(FLOAT32_Type, { as: "gyro_offset_x", foreignKey: "fk_gyro_offset_x_iid"});
  IMU_CalibrationOffsets.belongsTo(FLOAT32_Type, { as: "gyro_offset_y", foreignKey: "fk_gyro_offset_y_iid"});
  IMU_CalibrationOffsets.belongsTo(FLOAT32_Type, { as: "gyro_offset_z", foreignKey: "fk_gyro_offset_z_iid"});
  IMU_CalibrationOffsets.belongsTo(FLOAT32_Type, { as: "mgm_offset_x", foreignKey: "fk_mgm_offset_x_iid"});
  IMU_CalibrationOffsets.belongsTo(FLOAT32_Type, { as: "mgm_offset_y", foreignKey: "fk_mgm_offset_y_iid"});
  IMU_CalibrationOffsets.belongsTo(FLOAT32_Type, { as: "mgm_offset_z", foreignKey: "fk_mgm_offset_z_iid"});
  NADS_Data.belongsTo(FLOAT32_Type, { as: "mission_time", foreignKey: "fk_mission_time_iid"});
  PCU_Data.belongsTo(FLOAT32_Type, { as: "mission_time", foreignKey: "fk_mission_time_iid"});
  PCU_Data_payload_sensor_data.belongsTo(FLOAT32_Type, { as: "power_watts", foreignKey: "fk_power_watts_iid"});
  PCU_Data_payload_sensor_data.belongsTo(FLOAT32_Type, { as: "current_amps", foreignKey: "fk_current_amps_iid"});
  PCU_Data_payload_sensor_data.belongsTo(FLOAT32_Type, { as: "voltage_bus_volts", foreignKey: "fk_voltage_bus_volts_iid"});
  PCU_Data_payload_sensor_data.belongsTo(FLOAT32_Type, { as: "voltage_shunt_volts", foreignKey: "fk_voltage_shunt_volts_iid"});
  PCU_HK_TM_Type.belongsTo(FLOAT32_Type, { as: "v_bat", foreignKey: "fk_v_bat_iid"});
  PCU_HK_TM_Type.belongsTo(FLOAT32_Type, { as: "a_bat", foreignKey: "fk_a_bat_iid"});
  Quaternion_Data.belongsTo(FLOAT32_Type, { as: "w", foreignKey: "fk_w_iid"});
  Quaternion_Data.belongsTo(FLOAT32_Type, { as: "x", foreignKey: "fk_x_iid"});
  Quaternion_Data.belongsTo(FLOAT32_Type, { as: "y", foreignKey: "fk_y_iid"});
  Quaternion_Data.belongsTo(FLOAT32_Type, { as: "z", foreignKey: "fk_z_iid"});
  NADS_Data_payload.belongsTo(GPS_Data, { as: "gps", foreignKey: "fk_gps_iid"});
  NADS_SC_TM_Type.belongsTo(GPS_Data, { as: "gps", foreignKey: "fk_gps_iid"});
  TM_Type.belongsTo(HK_TM_Type, { as: "housekeeping_tm", foreignKey: "fk_housekeeping_tm_iid"});
  HK_TM_Type.belongsTo(HK_TM_Type_payload, { as: "payload", foreignKey: "fk_payload_iid"});
  DP_Data.belongsTo(HTL_Data, { as: "htl", foreignKey: "fk_htl_iid"});
  HTL_Data.belongsTo(HTL_Data_payload, { as: "payload", foreignKey: "fk_payload_iid"});
  HTL_Data_payload.belongsTo(HTL_Data_payload_heaters, { as: "heaters", foreignKey: "fk_heaters_iid"});
  HTL_Data_payload_heaters_indexes.belongsTo(HTL_Data_payload_heaters, { as: "HTL_Data_payload_heaters", foreignKey: "fk_HTL_Data_payload_heaters_iid"});
  HTL_Data_payload.belongsTo(HTL_Data_payload_thermistors, { as: "thermistors", foreignKey: "fk_thermistors_iid"});
  HTL_Data_payload_thermistors_indexes.belongsTo(HTL_Data_payload_thermistors, { as: "HTL_Data_payload_thermistors", foreignKey: "fk_HTL_Data_payload_thermistors_iid"});
  HTL_Mode.belongsTo(HTL_Heaters_Mode, { as: "heaters_mode", foreignKey: "fk_heaters_mode_iid"});
  HTL_Data.belongsTo(HTL_Mode, { as: "mode", foreignKey: "fk_mode_iid"});
  HTL_Mode.belongsTo(HTL_Mode_mode, { as: "mode", foreignKey: "fk_mode_iid"});
  SC_TM_Type_payload.belongsTo(HTL_SC_TM_Type, { as: "htl", foreignKey: "fk_htl_iid"});
  HTL_SC_TM_Type.belongsTo(HTL_SC_TM_Type_heaters, { as: "heaters", foreignKey: "fk_heaters_iid"});
  HTL_SC_TM_Type_heaters_indexes.belongsTo(HTL_SC_TM_Type_heaters, { as: "HTL_SC_TM_Type_heaters", foreignKey: "fk_HTL_SC_TM_Type_heaters_iid"});
  TC_Control_Experiment_Heater.belongsTo(Heater_ID, { as: "heater", foreignKey: "fk_heater_iid"});
  TC_Start_Manual_Control.belongsTo(Heater_ID, { as: "heater", foreignKey: "fk_heater_iid"});
  TC_Stop_Manual_Control.belongsTo(Heater_ID, { as: "heater", foreignKey: "fk_heater_iid"});
  HTL_Data_payload_heaters_indexes.belongsTo(Heater_Power_Type, { as: "Heater_Power_Type", foreignKey: "fk_Heater_Power_Type_iid"});
  HTL_SC_TM_Type_heaters_indexes.belongsTo(Heater_Power_Type, { as: "Heater_Power_Type", foreignKey: "fk_Heater_Power_Type_iid"});
  TC_Control_Experiment_Heater.belongsTo(Heater_Power_Type, { as: "heater_power", foreignKey: "fk_heater_power_iid"});
  IMU_Calibration_Commands.belongsTo(IMU_AxesConfiguration, { as: "set_axes_configuration", foreignKey: "fk_set_axes_configuration_iid"});
  IMU_Parameters.belongsTo(IMU_AxesConfiguration, { as: "axes_configuration", foreignKey: "fk_axes_configuration_iid"});
  IMU_AxesConfiguration.belongsTo(IMU_AxisSelection, { as: "x", foreignKey: "fk_x_iid"});
  IMU_AxesConfiguration.belongsTo(IMU_AxisSelection, { as: "y", foreignKey: "fk_y_iid"});
  IMU_AxesConfiguration.belongsTo(IMU_AxisSelection, { as: "z", foreignKey: "fk_z_iid"});
  IMU_AxisSelection.belongsTo(IMU_AxisSelection_remap, { as: "remap", foreignKey: "fk_remap_iid"});
  IMU_AxisSelection.belongsTo(IMU_AxisSelection_sign, { as: "sign", foreignKey: "fk_sign_iid"});
  IMU_Parameters_calibration_parameters_calibration_states.belongsTo(IMU_CalibrationLevel, { as: "platform", foreignKey: "fk_platform_iid"});
  IMU_Parameters_calibration_parameters_calibration_states.belongsTo(IMU_CalibrationLevel, { as: "gyroscope", foreignKey: "fk_gyroscope_iid"});
  IMU_Parameters_calibration_parameters_calibration_states.belongsTo(IMU_CalibrationLevel, { as: "accelerometer", foreignKey: "fk_accelerometer_iid"});
  IMU_Parameters_calibration_parameters_calibration_states.belongsTo(IMU_CalibrationLevel, { as: "magnetometer", foreignKey: "fk_magnetometer_iid"});
  IMU_Calibration_Commands.belongsTo(IMU_CalibrationOffsets, { as: "set_calibration_offsets", foreignKey: "fk_set_calibration_offsets_iid"});
  IMU_Parameters_calibration_parameters.belongsTo(IMU_CalibrationOffsets, { as: "offsets", foreignKey: "fk_offsets_iid"});
  NADS_Data_payload.belongsTo(IMU_Data, { as: "imu", foreignKey: "fk_imu_iid"});
  IMU_Data.belongsTo(IMU_Fusion_Data, { as: "fusion_data", foreignKey: "fk_fusion_data_iid"});
  IMU_Calibration_Commands.belongsTo(IMU_OperatingMode, { as: "set_imu_operating_mode", foreignKey: "fk_set_imu_operating_mode_iid"});
  IMU_Parameters.belongsTo(IMU_OperatingMode, { as: "operating_mode", foreignKey: "fk_operating_mode_iid"});
  IMU_Parameters.belongsTo(IMU_Parameters_calibration_parameters, { as: "calibration_parameters", foreignKey: "fk_calibration_parameters_iid"});
  IMU_Parameters_calibration_parameters.belongsTo(IMU_Parameters_calibration_parameters_calibration_states, { as: "calibration_states", foreignKey: "fk_calibration_states_iid"});
  IMU_Data.belongsTo(IMU_Sensors_Data, { as: "sensors_data", foreignKey: "fk_sensors_data_iid"});
  NADS_SC_TM_Type.belongsTo(IMU_Sensors_Data, { as: "imu_sensors", foreignKey: "fk_imu_sensors_iid"});
  IMU_Data.belongsTo(IMU_Temperatures, { as: "temperatures", foreignKey: "fk_temperatures_iid"});
  ATL_HK_TM_Type_temperatures_indexes.belongsTo(INT16_Type, { as: "INT16_Type", foreignKey: "fk_INT16_Type_iid"});
  ATL_SC_TM_Type_photodiodes_indexes.belongsTo(INT16_Type, { as: "INT16_Type", foreignKey: "fk_INT16_Type_iid"});
  Absolute_Barometer.belongsTo(INT16_Type, { as: "pressure_raw", foreignKey: "fk_pressure_raw_iid"});
  Absolute_Barometer.belongsTo(INT16_Type, { as: "temperature_raw", foreignKey: "fk_temperature_raw_iid"});
  Att_Lab_Data_Measurements_photodiodes_indexes.belongsTo(INT16_Type, { as: "INT16_Type", foreignKey: "fk_INT16_Type_iid"});
  Att_Lab_Data_Measurements_thermistors_indexes.belongsTo(INT16_Type, { as: "INT16_Type", foreignKey: "fk_INT16_Type_iid"});
  EL_HK_TM_Type.belongsTo(INT16_Type, { as: "upwards_pyranometer_temperature", foreignKey: "fk_upwards_pyranometer_temperature_iid"});
  EL_HK_TM_Type.belongsTo(INT16_Type, { as: "upwards_pyrgeometer_temperature", foreignKey: "fk_upwards_pyrgeometer_temperature_iid"});
  EL_HK_TM_Type.belongsTo(INT16_Type, { as: "downwards_pyranometer_temperature", foreignKey: "fk_downwards_pyranometer_temperature_iid"});
  EL_HK_TM_Type.belongsTo(INT16_Type, { as: "downwards_pyrgeometer_temperature", foreignKey: "fk_downwards_pyrgeometer_temperature_iid"});
  EL_SC_TM_Type.belongsTo(INT16_Type, { as: "upwards_pyranometer", foreignKey: "fk_upwards_pyranometer_iid"});
  EL_SC_TM_Type.belongsTo(INT16_Type, { as: "upwards_pyrgeometer", foreignKey: "fk_upwards_pyrgeometer_iid"});
  EL_SC_TM_Type.belongsTo(INT16_Type, { as: "downwards_pyranometer", foreignKey: "fk_downwards_pyranometer_iid"});
  EL_SC_TM_Type.belongsTo(INT16_Type, { as: "downwards_pyrgeometer", foreignKey: "fk_downwards_pyrgeometer_iid"});
  EL_SC_TM_Type_dif_barometers_indexes.belongsTo(INT16_Type, { as: "INT16_Type", foreignKey: "fk_INT16_Type_iid"});
  EnvLab_Experiment_Data_Sensors.belongsTo(INT16_Type, { as: "pyranometer_reading", foreignKey: "fk_pyranometer_reading_iid"});
  EnvLab_Experiment_Data_Sensors.belongsTo(INT16_Type, { as: "pyrgeometer_reading", foreignKey: "fk_pyrgeometer_reading_iid"});
  EnvLab_Experiment_Data_Sensors.belongsTo(INT16_Type, { as: "pyranometer_temperature", foreignKey: "fk_pyranometer_temperature_iid"});
  EnvLab_Experiment_Data_Sensors.belongsTo(INT16_Type, { as: "pyrgeometer_temperature", foreignKey: "fk_pyrgeometer_temperature_iid"});
  EnvLab_Pressure_Data_dif_barometers_indexes.belongsTo(INT16_Type, { as: "INT16_Type", foreignKey: "fk_INT16_Type_iid"});
  HTL_Data_payload_thermistors_indexes.belongsTo(INT16_Type, { as: "INT16_Type", foreignKey: "fk_INT16_Type_iid"});
  HTL_SC_TM_Type.belongsTo(INT16_Type, { as: "exp2_air_cavity_intermediate_height", foreignKey: "fk_exp2_air_cavity_intermediate_height_iid"});
  HTL_SC_TM_Type.belongsTo(INT16_Type, { as: "exp2_air_cavity_upper_height", foreignKey: "fk_exp2_air_cavity_upper_height_iid"});
  HTL_SC_TM_Type.belongsTo(INT16_Type, { as: "exp3_air_cavity_intermediate_height", foreignKey: "fk_exp3_air_cavity_intermediate_height_iid"});
  HTL_SC_TM_Type.belongsTo(INT16_Type, { as: "exp3_air_cavity_upper_height", foreignKey: "fk_exp3_air_cavity_upper_height_iid"});
  HTL_SC_TM_Type.belongsTo(INT16_Type, { as: "exp4_air_cavity_small_intermediate_1", foreignKey: "fk_exp4_air_cavity_small_intermediate_1_iid"});
  HTL_SC_TM_Type.belongsTo(INT16_Type, { as: "exp4_air_cavity_small_intermediate_2", foreignKey: "fk_exp4_air_cavity_small_intermediate_2_iid"});
  HTL_SC_TM_Type.belongsTo(INT16_Type, { as: "exp4_air_cavity_big_intermediate_1", foreignKey: "fk_exp4_air_cavity_big_intermediate_1_iid"});
  HTL_SC_TM_Type.belongsTo(INT16_Type, { as: "exp4_air_cavity_big_intermediate_2", foreignKey: "fk_exp4_air_cavity_big_intermediate_2_iid"});
  HTL_SC_TM_Type.belongsTo(INT16_Type, { as: "exp1_horizontal_heated_plate", foreignKey: "fk_exp1_horizontal_heated_plate_iid"});
  HTL_SC_TM_Type.belongsTo(INT16_Type, { as: "exp2_vertical_heated_plate", foreignKey: "fk_exp2_vertical_heated_plate_iid"});
  HTL_SC_TM_Type.belongsTo(INT16_Type, { as: "exp3_horizontal_heated_plate", foreignKey: "fk_exp3_horizontal_heated_plate_iid"});
  HTL_SC_TM_Type.belongsTo(INT16_Type, { as: "exp4_inner_vertical_plate_surface", foreignKey: "fk_exp4_inner_vertical_plate_surface_iid"});
  HTL_SC_TM_Type.belongsTo(INT16_Type, { as: "exp4_intermediate_heated_plate_surface", foreignKey: "fk_exp4_intermediate_heated_plate_surface_iid"});
  HTL_SC_TM_Type.belongsTo(INT16_Type, { as: "exp4_exterior_plate_surface", foreignKey: "fk_exp4_exterior_plate_surface_iid"});
  HTL_SC_TM_Type.belongsTo(INT16_Type, { as: "exp1_air_cavity_intermediate_height", foreignKey: "fk_exp1_air_cavity_intermediate_height_iid"});
  HTL_SC_TM_Type.belongsTo(INT16_Type, { as: "exp1_air_cavity_upper_height", foreignKey: "fk_exp1_air_cavity_upper_height_iid"});
  ATL_HK_TM_Type.belongsTo(INT32_Type, { as: "snapshot_time_secs", foreignKey: "fk_snapshot_time_secs_iid"});
  ATL_SC_TM_Type.belongsTo(INT32_Type, { as: "snapshot_time_secs", foreignKey: "fk_snapshot_time_secs_iid"});
  Absolute_Time_Type.belongsTo(INT32_Type, { as: "secs", foreignKey: "fk_secs_iid"});
  Absolute_Time_Type.belongsTo(INT32_Type, { as: "usecs", foreignKey: "fk_usecs_iid"});
  EL_HK_TM_Type.belongsTo(INT32_Type, { as: "snapshot_time_secs", foreignKey: "fk_snapshot_time_secs_iid"});
  EL_SC_TM_Type.belongsTo(INT32_Type, { as: "snapshot_time_secs", foreignKey: "fk_snapshot_time_secs_iid"});
  GPS_Data.belongsTo(INT32_Type, { as: "time_secs", foreignKey: "fk_time_secs_iid"});
  GPS_Data.belongsTo(INT32_Type, { as: "time_nsecs", foreignKey: "fk_time_nsecs_iid"});
  HK_TM_Type.belongsTo(INT32_Type, { as: "timestamp_secs", foreignKey: "fk_timestamp_secs_iid"});
  HTL_SC_TM_Type.belongsTo(INT32_Type, { as: "snapshot_time_secs", foreignKey: "fk_snapshot_time_secs_iid"});
  NADS_SC_TM_Type.belongsTo(INT32_Type, { as: "snapshot_time_secs", foreignKey: "fk_snapshot_time_secs_iid"});
  PCU_HK_TM_Type.belongsTo(INT32_Type, { as: "snapshot_time_secs", foreignKey: "fk_snapshot_time_secs_iid"});
  SC_TM_Type.belongsTo(INT32_Type, { as: "timestamp_secs", foreignKey: "fk_timestamp_secs_iid"});
  IMU_Temperatures.belongsTo(INT8_Type, { as: "temperature_accel", foreignKey: "fk_temperature_accel_iid"});
  IMU_Temperatures.belongsTo(INT8_Type, { as: "temperature_gyro", foreignKey: "fk_temperature_gyro_iid"});
  PCU_Data_payload_sensor_data.belongsTo(INT8_Type, { as: "digital_temperature", foreignKey: "fk_digital_temperature_iid"});
  PCU_HK_TM_Type.belongsTo(INT8_Type, { as: "temperature", foreignKey: "fk_temperature_iid"});
  DP_Data.belongsTo(NADS_Data, { as: "nad", foreignKey: "fk_nad_iid"});
  NADS_Data.belongsTo(NADS_Data_payload, { as: "payload", foreignKey: "fk_payload_iid"});
  NADS_Data.belongsTo(NADS_Mode, { as: "mode", foreignKey: "fk_mode_iid"});
  SC_TM_Type_payload.belongsTo(NADS_SC_TM_Type, { as: "nads", foreignKey: "fk_nads_iid"});
  IMU_Calibration_Commands.belongsTo(Null_Type, { as: "restart_imu", foreignKey: "fk_restart_imu_iid"});
  DP_Data.belongsTo(PCU_Data, { as: "pcu", foreignKey: "fk_pcu_iid"});
  PCU_Data.belongsTo(PCU_Data_payload, { as: "payload", foreignKey: "fk_payload_iid"});
  PCU_Data_payload.belongsTo(PCU_Data_payload_sensor_data, { as: "sensor_data", foreignKey: "fk_sensor_data_iid"});
  HK_TM_Type_payload.belongsTo(PCU_HK_TM_Type, { as: "pcu_hk", foreignKey: "fk_pcu_hk_iid"});
  PCU_Data.belongsTo(PCU_Mode, { as: "mode", foreignKey: "fk_mode_iid"});
  PCU_Data_payload.belongsTo(PCU_PS_Lines_Status, { as: "switches", foreignKey: "fk_switches_iid"});
  PCU_HK_TM_Type.belongsTo(PCU_PS_Lines_Status, { as: "switches", foreignKey: "fk_switches_iid"});
  IMU_Fusion_Data.belongsTo(Quaternion_Data, { as: "quaternion_orientation", foreignKey: "fk_quaternion_orientation_iid"});
  TC_Restart_Device.belongsTo(Restartable_Device_ID, { as: "device_id", foreignKey: "fk_device_id_iid"});
  TM_Type.belongsTo(SC_TM_Type, { as: "scientific_tm", foreignKey: "fk_scientific_tm_iid"});
  SC_TM_Type.belongsTo(SC_TM_Type_payload, { as: "payload", foreignKey: "fk_payload_iid"});
  EL_HK_TM_Type.belongsTo(Switch_Status, { as: "upwards_heater_status", foreignKey: "fk_upwards_heater_status_iid"});
  EL_HK_TM_Type.belongsTo(Switch_Status, { as: "downwards_heater_status", foreignKey: "fk_downwards_heater_status_iid"});
  EnvLab_Experiment_Data.belongsTo(Switch_Status, { as: "heater", foreignKey: "fk_heater_iid"});
  PCU_PS_Lines_Status.belongsTo(Switch_Status, { as: "al_line", foreignKey: "fk_al_line_iid"});
  PCU_PS_Lines_Status.belongsTo(Switch_Status, { as: "tmu_line", foreignKey: "fk_tmu_line_iid"});
  PCU_PS_Lines_Status.belongsTo(Switch_Status, { as: "sdpu_line", foreignKey: "fk_sdpu_line_iid"});
  TC_Type.belongsTo(TC_Change_Balloon_Mode, { as: "change_balloon_mode", foreignKey: "fk_change_balloon_mode_iid"});
  TC_Type.belongsTo(TC_Change_TM_Mode, { as: "change_tm_mode", foreignKey: "fk_change_tm_mode_iid"});
  TC_Type.belongsTo(TC_Control_Experiment_Heater, { as: "control_experiment_heater", foreignKey: "fk_control_experiment_heater_iid"});
  TC_Type.belongsTo(TC_Restart_Device, { as: "restart_device", foreignKey: "fk_restart_device_iid"});
  TC_Type.belongsTo(TC_Start_Manual_Control, { as: "start_manual_control", foreignKey: "fk_start_manual_control_iid"});
  TC_Type.belongsTo(TC_Stop_Manual_Control, { as: "stop_manual_control", foreignKey: "fk_stop_manual_control_iid"});
  TC_Change_TM_Mode.belongsTo(TMTC_Mode, { as: "new_mode", foreignKey: "fk_new_mode_iid"});
  IMU_Parameters_calibration_parameters.belongsTo(TaStE_Calibration_complete_type, { as: "calibration_complete", foreignKey: "fk_calibration_complete_iid"});
  HK_TM_Type.belongsTo(UINT32_Type, { as: "sequence_number", foreignKey: "fk_sequence_number_iid"});
  SC_TM_Type.belongsTo(UINT32_Type, { as: "sequence_number", foreignKey: "fk_sequence_number_iid"});

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
    TC_Type_Sent,
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
